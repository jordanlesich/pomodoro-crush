import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes'

const useStyles =  makeStyles({
    
       root: {
        color: '#cacaca',
        '& .MuiTypography-body1' : {
           fontSize: '1.2rem',
           fontFamily: 'Roboto Condensed', 
           fontWeight: '300',
           [sizes.up("lg")] : {
               fontSize: '1.5rem'
           }
           
        },
        '& .MuiTypography-colorTextSecondary' : {
            color: '#54555c',
            [sizes.up("lg")] : {
                fontSize: '1rem'
            }
            
        },
        '& .MuiInputBase-input' : {
            color: '#f1f1f1',
            fontSize: '1.4rem',
           fontFamily: 'Roboto Condensed',
           fontWeight: '300'
        }
       }
})


const SingleTaskItem = (props) => {
    
    const {
           isForm,
           task, 
           pomsCompleted, 
           pomTotal, 
           handleSubmit, 
           taskName,
           setTaskName, 
           isSelected
        } = props;

    const classes =  useStyles(props);

    return (
        <div className={classes.root}>
        {isForm? 
            <div>
                <ValidatorForm onSubmit={handleSubmit}>
                    <TextValidator
                        className={classes.form}
                        autoFocus
                        name="task"
                        type="text"
                        value={taskName}
                        onChange={setTaskName}
                        fullWidth
                        validators={['required']}
                        errorMessages={['This task needs a name']}
                    />
                </ValidatorForm>
            </div>
            :
                <div>
                {isSelected?     
                <ListItemText className={classes.root} 
                primary={task} 
                secondary={ `${pomsCompleted} of ${pomTotal}`} />
                :
                <ListItemText className={classes.root} 
                primary={task} />}
               </div>
        }
        </div>
    )


}

export default SingleTaskItem;