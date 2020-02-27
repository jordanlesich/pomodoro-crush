import React, {useContext, useState, useEffect} from 'react';
import useInputState from './Hooks/UseInputState';
import {TasksContext} from './contexts/task.context'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useTheme} from '@material-ui/core/styles';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    '& .MuiDialog-paperWidthSm' : {
      background: '#0d0e17',
      width: '550px'
    },

    '& .MuiDialog-paperFullScreen' : {
      background: '#0d0e17',
    },
  },
  label : {
    fontSize: '1.6rem',
    color : '#f6f6f6',
    fontFamily: 'Roboto Condensed',
    marginBottom: '1.2rem'
},
inputSection : {
  margin: '1rem 1rem 0 2rem',
  display: 'flex',
  flexDirection: 'column',
  
},
input:{
  borderRadius: '.5rem',
  marginBottom: '1rem',
  '& .MuiInputBase-root' : {
      color : '#f6f6f6',
      fontFamily: 'Roboto Condensed',
      fontSize: '1.4rem',
  },
  '& .MuiInputBase-input' : {
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  '& .MuiFormHelperText-root' : {
    color: '#f6f6f6',
    fontFamily: 'Roboto Condensed',
    fontSize:'1rem'
  }
},

  title: {
    '& .MuiTypography-h6' :{
    margin: '4rem 0 1rem 2rem',
    fontSize: '2.5rem',
    fontFamily: `Roboto Condensed`,
    color : '#f6f6f6',
    },
  },
  buttonText:{
    fontSize: '1.2rem',
    fontFamily: 'Roboto Condensed'
  },
  content: {
    '& form' : {
      height: '50%'
    }
  }
})


function AddTaskForm(props) {

  const classes = useStyles(props);
  const theme = useTheme();
  const [open] = useState(true);
  const [taskName, setTaskName, resetTaskName] = useInputState('');
  const [poms, setPoms, resetPoms ] = useInputState('');

  const {addTask} = useContext(TasksContext)
  
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const {
    closeModal, 
  } = props;



  useEffect(() => {
    ValidatorForm.addValidationRule('isNumber', value => Number.isInteger
    (parseInt(value)) && value > 0 && value < 25 
    )}, [poms]);

  const handleSubmit = (e) =>{
    e.preventDefault();

    addTask(taskName, parseInt(poms));
    resetTaskName();
    resetPoms();
    closeModal();
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={closeModal}
        aria-labelledby="Add a new task."
        className={classes.root}
      >

        <DialogTitle className={classes.title}>Add a Task</DialogTitle>
        
        <DialogContent className={classes.content}>
            <ValidatorForm onSubmit={handleSubmit}>
            <div className={classes.inputSection}>
            <label className={classes.label} htmlFor='taskName'>Task Name</label>
                <TextValidator
                    autoFocus
                    className={classes.input}
                    id='taskName'
                    name="task"
                    type="text"
                    value={taskName}
                    onChange={setTaskName}
                    fullWidth
                    validators={['required']}
                    errorMessages={['The task needs a name']}
                    autoComplete='off'
                />
                <label className={classes.label} htmlFor='pomsRequired'>Number of Poms</label>
                <TextValidator
                    id='pomsRequired'
                    className={classes.input}
                    name="pomsRequired"
                    helperText="Intervals of 25 mins. Please enter a number."
                    type="number"
                    value={poms}
                    onChange={setPoms}
                    fullWidth
                    validators={['required', 'isNumber']}
                    errorMessages={['Enter a number', 'Must be a number between 0-24']}
                    autoComplete='off'
                />

                </div>
                <DialogActions>
                    <Button onClick={closeModal} color="primary"className={classes.buttonText}>
                        Cancel
                    </Button>
                    <Button color="primary" type='submit' className={classes.buttonText}>
                        Add
                    </Button> 
                </DialogActions>
                </ValidatorForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddTaskForm;