import React, {useState, useEffect} from 'react';
import useToggle from './Hooks/UseToggle'
import TodoList from './TodoList'
import TopSection from './TopSection'
import uuid from 'uuid/v4'
import sizes from './sizes'

import { makeStyles } from '@material-ui/core/styles';

const _POMCOMPLETE = 100; 


const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh', 
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: '#f6f6f6',
      [sizes.up('xl')]: {
          alignItems:'center'
      }
    },
    topDivider: {
            backgroundColor: 'black',
            opacity: '1',
            marginTop: '1rem',
            height: '2px'
        },
    plusIconContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

  }));


const WorkSpace = (props) => {

    const {sessionDay, options} = props;
    
    const initialTasks = JSON.parse(window.localStorage.getItem('allTasks') || '[]');
    const initialGame = JSON.parse(window.localStorage.getItem('gameState')) || {
        points: 0,
        crushPower: 0,
        lastSession: sessionDay,
        finishedPoms: 0
      };
    
    const [tasks, setTasks] = useState(initialTasks)
    const [gameState, setGameState] = useState(initialGame)
    const [isRunning, setIsRunning] = useToggle(false)
    const [isPom, setIsPom] = useToggle(true)
    const [listSelect, setListSelect] = useState(null);

    const classes = useStyles(props);
        
    
        //!!!!!!!!!!!!!!!!!!factor all this away

        //Checks if there is a saved session 
        // If the current day is different than the LAST day saved in local storage
        if(sessionDay !== gameState.lastSession){
            
            //if there are left over tasks from yesterday, we delete the score
            if(tasks.length <= 0){
                setGameState({
                    points: 0,
                    crushPower: gameState.crushPower,
                    lastSession: sessionDay,
                    finishedPoms: 0
                    })
            }
            //if the user finished all of their tasks, we let them carry
            //the crush power over into the current session, incentivizing them
            //to finish everything on the list
            else{
                setGameState({
                    points: 0,
                    crushPower: 0,
                    lastSession: sessionDay,
                    finishedPoms: 0
                    })    
            }
            // If the last session is the same as the current session, we do nothing
        }

    useEffect(() => {
      window.localStorage.setItem('allTasks', JSON.stringify(tasks))
    },[tasks])

    useEffect(() => {
        window.localStorage.setItem('gameState', JSON.stringify(gameState))
    },[gameState])

    const addTask = (taskName, poms) => {
        const newTask = {
            task: taskName,
            pomTotal: poms,
            pomsCompleted: 0,
            id: uuid(),
        }
        setTasks([...tasks, newTask])
    }

    const changeTaskName = (name, id) => {
        const revisedTaskList = tasks.map(task => (
            task.id === id? {...task, task : name} : task
        ));
        setTasks(revisedTaskList)
    }

    const deleteTask = (id, pomTotal) => {
        const revisedTaskList = tasks.filter(task => task.id !== id);
        const newCrush = gameState.crushPower - pomTotal
        setGameState({...gameState, crushPower: newCrush})
        setTasks(revisedTaskList);     
    }
   
    const addPoints = (pts) => {
        const newGameState = {
            points: gameState.points + _POMCOMPLETE + gameState.crushPower,
            crushPower: gameState.crushPower + pts,
            lastSession: gameState.lastSession,
            finishedPoms: gameState.finishedPoms + 1
            }
        setGameState(newGameState)
    }


    /////Not Functional!!!!
    const pomComplete = () => {
        const newTaskArray = tasks.map( (task, index)=> {
            //if task is selected
            if(index === listSelect){
                const newTask = {
                    task: task.task,
                    pomTotal: task.pomTotal,
                    pomsCompleted: task.pomsCompleted + 1, 
                    id: task.id,
                }
                return newTask
            }
            else{
                return task
            }    
        }
        ).filter(task => task.pomsCompleted < task.pomTotal)
    
        //Calculates whether or not an array was FILTERED ^^
        //If so, we add CP equal to the amount of total pomodoros
        //If not, we add one point (for a pom completed)
        const score = tasks.length === newTaskArray.length? 
        1 : tasks[listSelect].pomTotal + 1;
       
        setTasks(newTaskArray);
        addPoints(score);
    }

        return(
            <div className={classes.root}>
            {
                <div className={classes.root}>
                    <TopSection 
                    toggleIsRunning={setIsRunning}
                    listSelect={listSelect}
                    pomComplete={pomComplete}
                    isRunning={isRunning}
                    isPom={isPom}
                    finishedPoms={gameState.finishedPoms}
                    tasks={tasks}
                    gameState={gameState}
                    changeTask={setListSelect}
                    setIsPom={setIsPom}
                    options={options}
                    />
                    <TodoList 
                    tasks={tasks} 
                    isPom={isPom}
                    listSelect={listSelect}
                    changeTask={setListSelect}
                    changeTaskName={changeTaskName}
                    deleteTask={deleteTask}
                    toggleIsRunning = {setIsRunning}
                    isRunning = {isRunning}
                    addTask = {addTask}
                    />
                </div>
            }    
            </div>
        )
    }

export default WorkSpace;
