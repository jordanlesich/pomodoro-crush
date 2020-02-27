import React, {useContext} from 'react'
import {TasksContext} from './contexts/task.context'
import Task from './Task'
import sizes from './sizes'
import IconButton from '@material-ui/core/IconButton';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

import SimpleBar from 'simplebar-react';
import './simplebar.css';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { SessionContext } from './contexts/session.context';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '32%',
        marginTop: '1rem',
        [sizes.up("lg")]: {
            gridRow: '3/5',
            gridColumn: '2',
            height: '60%',
            alignSelf: 'center',
            marginTop: '6rem',
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
            maxWidth: '600px',
            width: '100%',
            height: '50vh',
        }, 
    },
    addTaskPanel: {
        
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [sizes.up('lg')]: {
            transform: 'translateY(-4rem)',
        },
       '& svg': {
           color: '#3f51b5',
           opacity: '0.5',
           fontSize: '10rem',
           [sizes.up('lg')]: {
               fontSize: '20rem',
           },
           transition: 'ease-in-out .1s',
           '&:hover' : {
              transform: 'scale(1.1)'
           }
       }
    }
}) 

const TodoList = props =>{

    const {toggleModal} = useContext(SessionContext)
    const {tasks} = useContext(TasksContext)
    const classes = useStyles(props)

        

    return(
        <div className={classes.root}>
           {tasks.length > 0?  
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
                            />
                        ))}
            </List>
            </SimpleBar>
            :
            <div className={classes.addTaskPanel}>
                <IconButton onClick={toggleModal}>
                    <ControlPointIcon />
                </IconButton>
            </div>    
            }
        </div>
    )
}

export default TodoList