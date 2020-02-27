import React, {useState, useContext} from 'react';
import useInterval from './Hooks/UseInterval';
import PlayButton from './PlayButton';
import {TasksContext} from './contexts/task.context'
import {GameStateContext} from './contexts/gameState.context'
import {SessionContext} from './contexts/session.context';
import {playSFX} from './SFXPlayer';
import CircleTimer from './CircleTimer';
import sizes from './sizes'

import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem',
    },
    button: { 
        transform: "translate(-2.4rem, -5.5rem)",
        [sizes.up('sm')]: {
            transform: "translate(-2.4rem, -6.5rem)",
        },
        [sizes.up('md')]: {
            transform: "translate(-3rem, -7.5rem)",
        },
        [sizes.up("lg")]: {
            gridRow: '4',
            gridColumn: '1',
            justifySelf: 'flex-end',
            alignSelf: 'flex-start',
            
            transform: "translateX(-16.5rem)"
        },
        [sizes.up("xl")]: {
            transform: "translateX(-16.5rem)"
        },
        [sizes.up('xl')]: {
            marginTop: '-1.7rem',
            transform: 'translate(-20.5rem)'
        },
}
})

const Clock = (props) => {
    const classes = useStyles(props)



    const {
        isPom,
        toggleIsPom,
        isRunning,
        toggleIsRunning,
    }
    = useContext(SessionContext)
    const {options} = props;
    const DEFAULT_POM = options.pomTime;
    const DEFAULT_BREAK = options.breakTime;
    const breakSeconds = DEFAULT_BREAK * 60;
    const pomSeconds = DEFAULT_POM * 60;

    const {tasks, taskSelected, finishPom, deleteTask} = useContext(TasksContext)
    const {finishPomPts, gameState} = useContext(GameStateContext)

    const [time, setTime] = useState(isPom? pomSeconds : breakSeconds);

    const seconds = time % 60;
    const minutes = Math.floor(time / 60);
    const strSeconds  = seconds< 10 ? `0${seconds}` : `${seconds}`
    const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    
    const toggleClock = () =>{
        toggleIsRunning()
    }

    const pomComplete = (currentTask, taskComplete) => {
        if(taskComplete){
            finishPomPts(100 + gameState.crushPower, currentTask.pomTotal + 1)
            deleteTask(currentTask.id)
        }
        else{
            finishPomPts(100 + gameState.crushPower, 1)
            finishPom(currentTask.id)
        }

    }

    useInterval(() => {
        setTime(time - 1);
      }, isRunning? 1000: null);
      
      if (time <= 0){
          toggleClock()
          if(isPom){
              const currentTask = tasks[taskSelected]
              const isTaskFinished = currentTask.pomTotal === currentTask.pomsCompleted + 1
              setTime(breakSeconds)
              pomComplete(currentTask, isTaskFinished, tasks.length)
              playSFX(options.pomSound)
              toggleIsPom()
            }  
            else { 
                setTime(pomSeconds);
                playSFX(options.breakSound)
                toggleIsPom();
            }
        }
        
    
    
    const percentageFinished =  100 - (isPom? time / pomSeconds * 100 : time / breakSeconds * 100)  
    const displayText =  tasks.length > 0? `${strMinutes}:${strSeconds}` : '';
    const color = isPom? '#9b161a' : '#57f73e' ;
     
    return(
        <>
        <CircleTimer 
            strokeWidth="5"
            sqSize='230'
            percentage={percentageFinished}
            innerText={displayText}
            fontSize={'4.2rem'}
            color={color}
        />
        <span className={classes.button}>
           {tasks.length > 0 && <PlayButton setTime={setTime}/>}
        </span>
        </>
    
    )


}

export default Clock;