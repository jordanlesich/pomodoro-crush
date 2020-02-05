import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { makeStyles } from '@material-ui/core';
import sizes from './sizes';


const useStyles =  makeStyles({
    icon: {
        '& svg': {
            color: props => props.isRunning? '#24252c' 
            : '#f6f6f6',
            opacity: '0.3',
            fontSize: '2.5rem',
            [sizes.up("sm")]: {
                fontSize: '3.5rem',  
            },
            [sizes.up("md")]: {
                fontSize: '4.5rem',  
            }
            }
    }
})


const PlayButton = (props) => {

    const classes =  useStyles(props);
    const {toggleIsRunning, isRunning, listSelect, changeTask} = props;

    const handleToggle = e => {

       if(listSelect===null){
           changeTask(0)
       }
       else{
           toggleIsRunning()
       }
       
    }

    

    return(
        <IconButton 
        className={classes.icon} 
        onClick={handleToggle}
        disableRipple={true}
        >
            {isRunning? 
            <PauseCircleFilledIcon /> 
            : 
            < PlayArrowIcon/>
            }
        </IconButton>
    )
}

export default PlayButton;