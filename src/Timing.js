import React,{useEffect} from 'react';
import useInputState from './Hooks/UseInputState'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const useStyles = makeStyles({
    root:{
       display: 'flex',
       flexDirection: 'column' ,
       alignItems: 'center'
    },
    inputSection : {
        marginTop: '2rem',
        height: '6rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    label : {
        fontSize: '24px'
    },
    bottomDivider: {
        backgroundColor: '#090a0b',
        opacity: '1',
        height: '2px',
    },
    submitButton:{
        justifySelf: 'start',
        width:'10rem',
        marginTop: '2rem',
        border: '1px solid #3f51b5',
        '& .MuiButton-label' : {
            color: '#3f51b5',
            fontSize: '24px',
            fontFamily: 'Roboto Condensed',
        },
    },
    input:{
    width: '10rem',
    borderRadius: '.5rem',
    marginBottom: '1rem',
    backgroundColor: 'rgba(0,0,0,.3)',
    '& .MuiInputBase-root' : {
        color : '#f6f6f6',
        fontFamily: 'Roboto Condensed',
        fontSize: '30px',
        
    },
    '& .MuiInputBase-input' : {
        textAlign: 'center'
    },
    '& .MuiFormHelperText-root' : {
        width: 'max-content',
        fontSize: '16px'
    },
    // `& .Mui`
    '& .MuiFormLabel-root.Mui-error':{
        color : '#f44336',
    },
    }
})

const Timing = props => {
   const {saveOptions, options} = props;


   const [pomTime, setPomTime] = useInputState(options.pomTime)
   const [breakTime, setBreakTime] = useInputState(options.breakTime)

   const classes = useStyles(props)

   
    
  useEffect(() => {
    ValidatorForm.addValidationRule('isNumber', value => Number.isInteger
    (parseInt(value))
    )}, [pomTime, breakTime])

    const handleSubmit = e => {
        e.preventDefault()
        const newTime = {
            'pomTime' : pomTime,
            'breakTime' : breakTime
        }
        saveOptions(newTime)
    }

    const isNotSaved = (pomTime!==options.pomTime || breakTime!==options.breakTime) 
    

    return(
        <div >
           <ValidatorForm  onSubmit={handleSubmit} className={classes.root}>
            <div className={classes.inputSection}>
                <label className={classes.label}htmlFor={'pomLength'}>Pomodoro Length</label>
                <TextValidator
                    className={classes.input}
                    id={'pomLength'}
                    autoFocus
                    margin="dense"
                    name="task"
                    secondary={'In Minutes'}
                    value={pomTime}
                    onChange={setPomTime}
                    fullWidth
                    validators={['required', 'isNumber']}
                    errorMessages={['Must have a time', 'Must be an amount of minutes']}
                    autoComplete='off'
                />
                <Divider className={classes.bottomDivider}/>
            </div>
            <div className={classes.inputSection}>
            <label className={classes.label}htmlFor={'breakLength'}>Break Length</label>
                <TextValidator
                    id={'breakLength'}
                    className={classes.input}
                    margin="dense"
                    name="pomsRequired"
                    secondary='In Minutes'
                    value={breakTime}
                    onChange={setBreakTime}
                    fullWidth
                    validators={['required', 'isNumber']}
                    errorMessages={['Enter a number', 'Must be an amount of minutes']}
                    autoComplete='off'
                />
                <Divider className={classes.bottomDivider}/>
            </div>
            <Button className={classes.submitButton} variant="outlined" type='submit' disabled={!isNotSaved}>
                Save
            </Button>
            </ValidatorForm>
        </div>
    )
}

export default Timing