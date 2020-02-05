import React from 'react'
import Clock from './Clock'
import PlayButton from './PlayButton'
import ProgressGauge from './ProgressGauge'
import sizes from './sizes'

import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'column',
        height: '60%',
        justifyContent: 'space-between',
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
    scoreBoard:{
        fontFamily: `'Press Start 2P'`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '.5rem 1rem 0 1rem',
        fontSize: '.6rem',
        [sizes.up("md")]: {
            fontSize: '1rem'
        },
        [sizes.up("lg")]: {
            gridRow: '1',
            gridColumn: '1/3'
        },
    },
    
    scoreItem: {
        margin: '0px',
        fontWeight: '400',
        opacity: '0.6'
    },
    clockSpace: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        [sizes.up("lg")]: {
            gridColumn: '1',
            gridRow:'3',
            justifyContent: 'flex-start',
        },
    },
    titleSpace: {
        display:'flex',
        justifyContent: 'center',
        [sizes.up("lg")]: {
            gridColumn: '1/3',
            gridRow: '2',
            alignItems: 'center'
        },     
    },
    title: {
        fontWeight: '100',
        margin: '0',
        fontSize: '36px',
        [sizes.up("sm")]: {
            fontSize: '40px',
        },                    
        [sizes.up("md")]: {
            fontSize: '46px',
        },
                       
    },    
    playButton: {
         position: 'absolute',
        '& button' : {
        
        transform: 'translate(0, 4.5rem)',
        [sizes.up("sm")]: {
            transform: 'translate(0, 5.5rem)',
        },
        [sizes.up("md")]: {
            transform: 'translate(0, 6.5rem)',
        },
    },
        [sizes.up('lg')]:{
            display: 'none'
        }
    }
})

const TopSection = (props) => {

    const{ 
        pomComplete, 
        toggleIsRunning, 
        isRunning, 
        isPom, 
        setIsPom,
        toggleScoreBoard, 
        tasks, 
        listSelect, 
        gameState, 
        changeTask,
        finishedPoms,  
        options
    }
         = props;

    const classes = useStyles(props)

    const color = isPom? '#9b161a' : '#57f73e' ;

    const genInstructionText = () => {
        if(isPom){
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
        <div className={classes.root}>
            <div className={classes.scoreBoard}>
                <ProgressGauge 
                    tasks={tasks}
                    finishedPoms={finishedPoms}  
                />
                <p className={classes.scoreItem}>{gameState.points}</p>
                <p className={classes.scoreItem}>CP: {gameState.crushPower}</p>  
            </div>
            <div className={classes.titleSpace}>
                <h1 className={classes.title}>
                  {genInstructionText()}
                </h1>
            </div>
            <div className={classes.clockSpace}>
                    <Clock 
                    className={classes.circleClock}
                    isRunning={isRunning} 
                    toggleIsRunning={toggleIsRunning}
                    pomComplete={pomComplete}
                    setIsPom={setIsPom}
                    toggleScoreBoard={toggleScoreBoard}
                    isPom={isPom}
                    color={color}
                    options={options}
                    size={sizes.width}
                    />
                <div className={classes.playButton}>
                    <PlayButton 
                    isRunning={isRunning}
                    toggleIsRunning={toggleIsRunning}
                    listSelect={listSelect}
                    isPom={isPom}
                    changeTask={changeTask}
                    />
                </div>
            </div>
           <div></div>
        </div>
    )
}

export default TopSection