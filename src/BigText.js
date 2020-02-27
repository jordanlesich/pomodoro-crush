import React,{useContext} from 'react'
import {SessionContext} from './contexts/session.context'
import {TasksContext} from './contexts/task.context'
import { makeStyles } from '@material-ui/core'
import sizes from './sizes'

const useStyles = makeStyles({
    root: {
        height: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [sizes.up("lg")]: {
           gridRow: '3',
           gridColumn: '2',
           alignSelf: 'flex-start',
           marginTop: '6rem'
          },
    },
    bigText: {
        fontWeight: '100',
        fontSize: '2rem',
        margin: '0',
        [sizes.up("sm")]: {
            fontSize: '2.5rem',
        },                    
        [sizes.up("lg")]: {
            fontSize: '3rem',
        },                    
    }, 
    
})

const BigText = (props) => {

    const classes = useStyles(props)
    const {tasks} = useContext(TasksContext)
    const {isPom, isRunning} = useContext(SessionContext)

    const genInstructionText = () => {
        if(tasks.length <= 0){
            return 'Add a Task'
        }
        else if(isPom){
            if(isRunning){
                return 'Focus'
            }
            else{
               return 'Choose a Task'
            }
        }
        else{
            if(isRunning){
                return  'On Break'
            }
            else{
                return `Take a Break`
            }
        }
    }

    return(
        <header className={classes.root}>
        <h1 className={classes.bigText}>{genInstructionText()}</h1>
        </header>
    )
}

export default BigText 