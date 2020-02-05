import React from 'react'
import SingleTaskIcon from './SingleTaskIcon'
import SingleTaskItem from './SingleTaskItem'
import SingleTaskMenu from './SingleTaskMenu'
import useInputState from './Hooks/UseInputState'
import useToggle from './Hooks/UseToggle'

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    
        root: {
            // backgroundColor: 'rgba(0,0,0,.1)',
            padding: '3px',
            '& .MuiListItem-root.Mui-selected' : {
                backgroundColor: 'rgba(255,255,255,0.1)'
            }
        },

        bottomDivider: {
            backgroundColor: '#f6f6f6',
            opacity: '.05',
            height: '1px',
            marginLeft: '48px',
            marginRight: '10px'
        },
})


const Task = props =>{

    const [isForm, toggleForm] = useToggle(false)
    const [taskName, setTaskName] = useInputState(`${props.task}`)

    const classes = useStyles(props)
    const {
        pomTotal, 
        id, 
        task, 
        pomsCompleted, 
        index, 
        changeTask, 
        selected, 
        changeTaskName, 
        deleteTask, 
        togglePlay, 
        isRunning
                } = props;



    const handleListItemClick = e =>{
        e.stopPropagation();
        //locks selection while clock is running or is a form
        if(isRunning || isForm){
            return
        }
        else{
        //starts clock if already selected (double-click)
                if (index === selected){
            togglePlay(true);
            }
            //changes what is selected
            else{
            changeTask(index);
            }
        }
        
    }

    const handleDelete = () =>{
        deleteTask(id, pomTotal)
    }

     const handleSubmit = e => {
         e.stopPropagation();
         e.preventDefault();
         changeTaskName(taskName, id)
         toggleForm()
     }

    const isSelected = selected === index;
    
    
    return(
     
    <div>    
        
    <ListItem 
    className={classes.root}
    selected={isSelected}
    onClick={handleListItemClick}
    disabled={(!isSelected && isRunning)}
    >
        <SingleTaskIcon 
        isSelected={isSelected}
        togglePlay={togglePlay}
        isRunning={isRunning}
        />
        <SingleTaskItem 
        className={classes.taskText}
        isSelected={isSelected}
        task={task}
        isForm={isForm}
        isRunning={isRunning}
        taskName={taskName}
        setTaskName={setTaskName}
        pomTotal={pomTotal}
        pomsCompleted={pomsCompleted}
        handleSubmit={handleSubmit}
        />
        <SingleTaskMenu 
        className={classes.taskMenu}
        deleteTask={handleDelete}
        editTask={toggleForm}
        handleSubmit={handleSubmit}
        isForm={isForm}
        isRunning={isRunning}
        />
        
    </ListItem>
    <Divider className={classes.bottomDivider} />
    </div>
    )
}


export default Task