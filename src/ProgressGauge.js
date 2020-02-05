import React from 'react';
import { makeStyles } from '@material-ui/core'
import tomato from './tomato.svg'
import sizes from './sizes'


const useStyles =  makeStyles({
    gauge: {
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        fontWeight: '400',
        opacity: '0.6',
        margin: '0rem',
        fontSize: '.6rem',
        [sizes.up("sm")]: {
        fontSize: '.8rem'
           
        },
        [sizes.up("md")]: {
        fontSize: '1rem'
           
        }
    },
    tomato: {
        marginRight: '6px',
        height: '1.3rem'
    }
})



const ProgressGauge = props => {

    const classes =  useStyles(props)
    
    const {tasks, finishedPoms} = props;

    const totalPomsCompleted = tasks.reduce((total, task) => total + task.pomsCompleted, 0) + finishedPoms
    const totalPoms = tasks.reduce((total, task) => total + task.pomTotal, 0) + finishedPoms
    
    return(
        <div className={classes.gauge}>
            <img className={classes.tomato} src={tomato} alt='pizelized tomato'/>
            <p className={classes.text}>{`${totalPomsCompleted}/${totalPoms}`}</p>
        </div>
    );
}

export default ProgressGauge;