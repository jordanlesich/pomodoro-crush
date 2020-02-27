import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import IconButton from '@material-ui/core/IconButton';
import sizes from './sizes'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    root: {
        alignSelf: 'center',
        marginLeft: '1rem',
        paddingLeft: '0px',
        cursor: 'pointer',
        '& svg' : {

            color: '#d1d1d0',
            opacity: props => props.isSelected? '1' : '0',
            transition: 'ease-in-out 250ms',
            [sizes.up("lg")] : {
                fontSize: '2rem'
            }
        }, 
    },
})

const SingleTaskIcon = (props) => {

    const {isSelected, toggleIsRunning, isRunning} = props;
    const classes = useStyles(props)

    const handleClick = e => {
        if(isSelected){
        //This is deliberate. I want to propogate click if not selected. 
         e.stopPropagation()
         toggleIsRunning()
         } 
         else{
             return
         }
        
    } 

    return(
        <IconButton className={classes.root} onClick={ handleClick}> 
       
           {isSelected && isRunning ? <PauseIcon /> : <PlayArrowIcon />}
            
        </IconButton >
    )

}


export default SingleTaskIcon