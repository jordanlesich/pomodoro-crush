import React, {useContext, useEffect} from 'react'
import AddTaskForm from './AddTaskForm'
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {SessionContext} from './contexts/session.context'
import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes'
import { TasksContext } from './contexts/task.context';

const useStyles = makeStyles({
    plusIconContainer: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        [sizes.up("lg")]: {
            position: 'relative',
            gridRow: '4',
            gridColumn: '1',
            justifySelf: 'flex-end',
            alignSelf: 'flex-start',
            marginTop: '1.7rem',
            transform: 'translateX(-9rem)',
            [sizes.vertical('lg')]:{
                marginTop: '-2rem'
            }
          },
        [sizes.up('xl')]: {
            [sizes.vertical('lg')]:{
                transform: 'translateX(-9rem)',
                marginTop: '0'
            }
        },
        '& svg' : {
            color: '#f6f6f6',
            opacity: '0.3',
            fontSize: '3.5rem',
            cursor: 'pointer',
            transition: 'ease-in-out .1s',
            '&:hover' : {
              transform: 'scale(1.1)'
            },
            [sizes.up("lg")]:{
                fontSize: '6rem',
            }
        },
    },
    plusIcon: {
        padding: '0',
        
    }
})

const AddTaskButton = (props) => {

    const classes = useStyles(props)

    const {isRunning, drawerOpen, modalOpen, toggleModal} = useContext(SessionContext)
    const {tasks} = useContext(TasksContext)

    const handlePress = e => {
        if(!drawerOpen && !modalOpen){
            if(e.key === 'Enter'){
                e.preventDefault();
                toggleModal();  
            } 
       }
    }

    useEffect(() => {
        window.addEventListener('keydown', handlePress)
        return () => {
          window.removeEventListener('keydown', handlePress)
        };
      })


    return( 
        <div className={classes.plusIconContainer}>
            {tasks.length > 0 &&
            <IconButton aria-label="Add Item" onClick={toggleModal} className={classes.plusIcon} disabled={isRunning}>
                <AddBoxIcon />
            </IconButton>
            }
            {modalOpen && <AddTaskForm 
            closeModal={toggleModal} 
            />}                   
        </div>
    )
}

export default AddTaskButton