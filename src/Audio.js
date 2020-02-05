import React,{useState} from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {playSFX} from './SFXPlayer'

const useStyles = makeStyles({
        root:{
           display: 'flex',
           flexDirection: 'column' 
        },
        
        inputSection : {
            margin: '2rem 0 0 3rem',
            height: '6rem',
            display: 'flex',
            flexDirection: 'column',
        },
        label : {
            fontSize: '24px',
            marginBottom: '.5rem'
        },
        bottomDivider: {
            backgroundColor: '#090a0b',
            opacity: '1',
            height: '2px',
        },
        submitButton:{
            justifySelf: 'start',
            width:'10rem',
            margin: '2rem 0 0 3rem',
            border: '2px solid #3f51b5',
            '& .MuiButton-label' : {
                color: '#3f51b5',
                fontSize: '24px',
                fontFamily: 'Roboto Condensed',
            },
        },
        select:{
            width: '10rem',
            borderRadius: '.5rem',
            padding: '.5rem 0 .5rem 0',
            border: 'none',
            marginBottom: '1rem',
            backgroundColor: 'rgba(0,0,0,.3)',
            color : '#f6f6f6',
            fontFamily: 'Roboto Condensed',
            fontSize: '20px',
        },
        '& select:focus' : {
            border: 'none',
            outline: '0px'
        },
        option: {
            backgroundColor: '#0d0e17',
            border: 'none',
            outline:'0',
           
        }
    })
    

const Audio = props => {
    const {saveOptions, options} = props;

   const [pomSound, setPomSound] = useState(options.pomSound)
   const [breakSound, setBreakSound] = useState(options.breakSound)

  

   const classes = useStyles(props)

    const handleSubmit = e => {
        e.preventDefault()
        const newAudio = {
            'pomSound' : pomSound,
            'breakSound' : breakSound,
        }
        saveOptions(newAudio)
    }

    const handlePomChange = e => {
        playSFX(e.target.value);
        setPomSound(e.target.value);
    }

    const handleBreakChange = (e) => {
        playSFX(e.target.value);
        setBreakSound(e.target.value);
    }

    const isSaved = (pomSound!==options.pomSound || breakSound!==options.breakSound)

    return(
        <div>
           
            <form onSubmit={handleSubmit} className={classes.root}>
            <div className={classes.inputSection}>
                <label className={classes.label}htmlFor={'pomSelect'}>Pomodoro SFX</label>
                <select
                    className={classes.select}
                    value={pomSound}
                    id="pomSelect"
                    name='pomSound'
                    onChange={handlePomChange}
                    autoFocus
                >
                    <option className={classes.option} value='chime'>Chime</option>
                    <option className={classes.option} value='timeWave'>Time Wave</option>
                    <option className={classes.option} value='theHorror'>The Horror</option>
                    <option className={classes.option} value='glockenspiel'>Glockenspiel</option>
                    <option className={classes.option} value='cowbell'>Cowbell</option>
                    <option className={classes.option} value='sheep'>Sheep</option>
                </select>
                <Divider className={classes.bottomDivider}/>
                </div>
            <div className={classes.inputSection}>
            <label className={classes.label} htmlFor={'breakLength'}>Break SFX</label>
                <select
                    className={classes.select}
                    id="breakSelect"
                    value={breakSound}
                    onChange={handleBreakChange}
                    autoFocus
                >
                    <option className={classes.option} value='chime'>Chime</option>
                    <option className={classes.option} value='timeWave'>Time Wave</option>
                    <option className={classes.option} value='theHorror'>The Horror</option>
                    <option className={classes.option} value='glockenspiel'>Glockenspiel</option>
                    <option className={classes.option} value='cowbell'>Cowbell</option>
                    <option className={classes.option} value='sheep'>Sheep</option>
                </select>
                <Divider className={classes.bottomDivider}/>
            </div>
            {isSaved &&
            <Button className={classes.submitButton} variant="outlined" type='submit' >
                Save
            </Button>}
            </form>
        </div>
    )
}

export default Audio