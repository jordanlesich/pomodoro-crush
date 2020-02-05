import React from 'react'
import Task from './Task'
import AddTaskForm from './AddTaskForm'
import useToggle from './Hooks/UseToggle'
import sizes from './sizes'
import PlayButton from './PlayButton'

import SimpleBar from 'simplebar-react';
import './simplebar.css';

import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        [sizes.up("lg")]: {
            display: 'grid',
            position: 'absolute',
            height: '100%',
            width: '100%',
            gridTemplateColumns: '50% 50%',
            gridTemplateRows: '5% 15% 80%'
        },
        [sizes.up('xl')]: {
            maxWidth: '1100px'
        }
      },
    plusIconContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& svg' : {
            color: props => props.isRunning? '#24252c' 
            : '#f6f6f6',
            opacity: '0.3',
            fontSize: '3.5rem',
            cursor: 'pointer',
            [sizes.up("lg")]:{
                fontSize: '6rem',
            }
        },
        [sizes.up("lg")]: {
            display: 'flex',
            gridRow: '3',
            gridColumn: '1',
            alignSelf: 'flex-end',
            justifySelf: 'center',
            transform: 'translate(6rem, -6rem)'
        }
        
    },
    innerList: {
        padding: '0',
    },
    mainList: {
        
        height: '32vh',
        [sizes.up("sm")]: {
            maxWidth: '500px',
            alignSelf: 'center',
            width: '100%'
        },
        [sizes.up("lg")]: {
            gridColumn: '2',
            gridRow: '3',
            maxWidth: '500px',
            width: '100%',
            height: '70%',
            justifySelf: 'flex-start',
            marginTop: '6rem'
        },
        
    },
    playButton: {
        position: 'relative',
        display: 'none',
        [sizes.up("lg")]: {
            display: 'flex',
            gridRow: '3',
            gridColumn: '1',
            alignSelf: 'flex-end',
            justifySelf: 'center',
            transform: 'translate(-6rem, -5rem)',
            '& svg': {
                fontSize: '8rem'
        } 
        }
    }
    
}) 

const TodoList = props =>{

    const [modalIsOpen, toggleModal] = useToggle(false);

    const { 
        tasks, 
        changeTask, 
        changeTaskName, 
        deleteTask, 
        toggleIsRunning, 
        isRunning,
        addTask,
        isPom,
        listSelect
                } = props;

    const classes = useStyles(props)
        

    return(
        <div className={classes.root}>
            
            <SimpleBar 
            forceVisible="y" 
            autoHide={false}
            className={classes.mainList}
            >
            <List component="ul" aria-label="main list" className={classes.innerList}>     
                        
                        {tasks.map( (task,index) => (
                            <Task 
                                task={task.task}
                                pomTotal={task.pomTotal}
                                pomsCompleted={task.pomsCompleted}
                                key={task.id}
                                id={task.id}
                                index={index}
                                changeTask={changeTask}
                                changeTaskName={changeTaskName}
                                selected={listSelect}
                                deleteTask={deleteTask}
                                togglePlay={toggleIsRunning}
                                isRunning={isRunning}
                            />
                        ))}
            </List>
            </SimpleBar>    
            <div className={classes.playButton}>
                <PlayButton     
                    isRunning={isRunning}
                    toggleIsRunning={toggleIsRunning}
                    listSelect={listSelect}
                    isPom={isPom}
                    changeTask={changeTask}
                    />
            </div>
            <div className={classes.plusIconContainer}>
                <IconButton aria-label="Add Item" onClick={toggleModal} className={classes.plusIcon} disabled={isRunning}>
                <AddBoxIcon />
                </IconButton>
                    {modalIsOpen && <AddTaskForm closeModal={toggleModal} addTask={addTask}/>}                   
            </div>

        </div>
    )
}

export default TodoList