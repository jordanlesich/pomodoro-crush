import React, {useContext} from 'react';
import {TasksContext} from './contexts/task.context'
import {GameStateContext} from './contexts/gameState.context'
import ScoreBoard from './ScoreBoard'
import Clock from './Clock'
import TodoList from './TodoList'
import BigText from './BigText';
import AddTaskButton from './AddTaskButton'
import MenuButton from './MenuButton'
import sizes from './sizes'


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0d0e17',
      height: '100%',
      width: '100vw',
      color: '#f6f6f6',
      alignItems: 'center',
      [sizes.up("lg")]: {
        display: 'grid',
        gridTemplateRows: '11% 7% 60% 22%',
        gridTemplateColumns: '55% 45%',
        maxWidth: '1000px'
      },
      [sizes.up("xl")]: {
        maxWidth: '1200px'
      }  
    },

  });


const WorkSpace = (props) => {

    const {tasks} = useContext(TasksContext)
    const {gameState, endStreak, persistStreak} = useContext(GameStateContext)
    
    
    const {options} = props;
    
    const classes = useStyles(props);
    
        const currentDay = JSON.stringify(new Date().getDate()) 
        const isCurrentDay = gameState.lastDate === currentDay


        if(!isCurrentDay){
          if(tasks.length>0){
            endStreak(currentDay)
          }
          else{
            persistStreak(currentDay)
          }
        }

        
        return(
                
                <div className={classes.root}>
                        <MenuButton />
                        <ScoreBoard />
                        <BigText className={BigText}/>
                        <Clock 
                        className={classes.circleClock}
                        options={options}
                        />
                        <TodoList />
                        <AddTaskButton />
                </div>
        )
    }

export default WorkSpace;
 