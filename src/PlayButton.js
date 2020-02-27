import React, {useContext, useEffect} from 'react'
import {SessionContext} from './contexts/session.context';
import {TasksContext} from './contexts/task.context';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { makeStyles } from '@material-ui/core';
import sizes from './sizes';


const useStyles =  makeStyles({
    button: {
        position: 'absolute',
        [sizes.up("lg")]: {
            position: 'relative'
        },
        '& svg': {
            color: props => props.isRunning? '#24252c' 
            : '#f6f6f6',
            opacity: '0.3',
            fontSize: '3.5rem',
            transition: 'ease-in-out .1s',
            '&:hover' : {
              transform: 'scale(1.1)'
            },
            [sizes.up("sm")]: {
                fontSize: '3.5rem',  
            },
            [sizes.up("md")]: {
                fontSize: '4.5rem',  
            },
            [sizes.up("lg")]: {
                fontSize: '7.7rem', 
            },
            },
        
    }
})


const PlayButton = (props) => {

    const {isRunning, toggleIsRunning, isPom, modalOpen} = useContext(SessionContext);
    const {taskSelected, changeTaskSelected} = useContext(TasksContext);
    const {setTime} = props;

    const classes =  useStyles(props);

    const handleClick = e => {
    
        if(!isPom && isRunning){
            setTime(0)
       }
       else if(taskSelected===null){
           changeTaskSelected(0)
       }
       else{
           toggleIsRunning()
       }
       
    }


    const handlePress = e => { 
        if (e.key === ' ' && !modalOpen){
            e.preventDefault();
            if(taskSelected !== null){
                toggleIsRunning()
            }
            else{
                changeTaskSelected(0) 
            }
        }
        else return
    }
 
    useEffect(() => {
        window.addEventListener('keydown', handlePress)
        return () => {
          window.removeEventListener('keydown', handlePress)
        };
      })

    return(
        <IconButton 
        className={classes.button} 
        onClick={handleClick}
        disableRipple={true}
        >
            {isRunning && !isPom?
            <SkipNextIcon/> 
            :
            isRunning? 
            <PauseCircleFilledIcon /> 
            : 
            < PlayArrowIcon/>
            }
        </IconButton>
    )
}

export default PlayButton;