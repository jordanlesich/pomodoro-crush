import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import useInterval from './Hooks/UseInterval';



//THE PLAN FOR THIS IS TO HAVE THE TEXT ANIMATED AND DYMANIC. 
//EACH SECTION WILL APPEAR IN INCREMENTS 
// EACH IN ITEM IS SECTION WILL APPEAR, AND THEN THE VALUE WILL COUNT IN FAST INCREMENTS
//ONCE THE VALUE MAXIMUM IS REACHED, IT WILL GLOW A COLOR

//'CRUSHED' WILL SHINE RED FOR A SECOND
//'BREAK' WILL SHINE GREEN FOR A SECOND


//THIS WILL BE A '2-SIDED' SCORE BOARD, ONE FOR WHEN THE POMODORO IS FINISHED, 
//AND ANOTHER FOR WHEN THE BREAK IS FINISHED

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 0 0.5rem 0rem',
    },
    title: {
        fontWeight: '300',
        margin: '3rem 0 1rem 0',
        alignSelf: 'center'
    },
    section: {
        alignSelf: 'start',
        margin: '1rem 0rem 1rem 2rem'
    },
    pointText: {
        fontWeight: '400',
        fontSize: '16px',
        margin: '0.5rem 0rem 0rem 0rem'
    },
    buttonSection : {
        marginTop: '2rem',
        width: '100%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        backgroundColor: 'transparent',
        fontFamily: 'Roboto Condensed',
        border: 'none',
        marginBottom: '1rem',
        fontSize: '18px',
        color: '#f1f1f1',
        padding: '0'
       
        
    },
    
    

})


const ScoreBoard = props => {
    
    


    const [sections, setSections] = useState(0)

    const {setIsRunning, setIsPom, toggleScoreBoard, prevCrushPower} = props;
    const classes = useStyles(props);

    const limit = sections <= 4;
    const {crushPower} = props.gameState;
    const basePoints = 100;
    const addedCrushPower = crushPower - prevCrushPower;
    const CP_fromBonus = addedCrushPower - 1; 
    

     useInterval(() => {
        setSections( sections + 1);

      }, limit? 1000 : null)

   const handleContinue = (e) => {
       setIsPom(false)
       setIsRunning()
       toggleScoreBoard()
   }

   //CONTENT refactored out of the return() so that I can make it more dynamic later on

   const title = <h1 className={classes.title}>Pomodoro <em>CRUSHED</em></h1>;

   const pointsSection = <div className={classes.section}>
                <p className={classes.pointText}>POINTS: </p>
                <p className={classes.pointText}>Pomodoro Finished: {basePoints} pts</p>
                <p className={classes.pointText}>Crush Power: + {crushPower - addedCrushPower} pts</p>
                <p className={classes.pointText}>TOTAL: {basePoints + (crushPower - addedCrushPower)} pts</p>
                    </div>;

   const bonusSection = <div className={classes.section}> 
                <p className={classes.pointText}>CP BONUS: </p>
                <p className={classes.pointText}>Pomodoro Complete: + 1 CP  </p>
                <p className={classes.pointText}>Task Complete: + {CP_fromBonus} CP  </p>
                <p className={classes.pointText}>TOTAL: + {addedCrushPower} CP  </p>
                    </div>

    const buttonSection = <div className={classes.buttonSection}>
                        <button className={classes.button} onClick={handleContinue}>
                        Take Break 
                        </button>
                        <button className={classes.button} onClick={toggleScoreBoard}>
                        Skip
                        </button>
                        </div>


    return(
        <div className={classes.root}>

            {/* CONTENT APPEARS IN SECTIONS, STARTING WITH THE FIRST AT THE TOP AND 
            CASCADING DOWNWARDS EACH SECOND */}

            {sections >= 1 && title}
            {sections >= 2 && pointsSection}
            {sections >= 3 && bonusSection}
            {sections >=4 && buttonSection}
           
        </div>
    )
}

export default ScoreBoard;


  //    scoreBoard? 
            //    <div className={classes.root}>
            //         <ScoreBoard 
            //         gameState={gameState}
            //         setIsPom={setIsPom}
            //         isPom={isPom}
            //         toggleScoreBoard={setScoreBoard}
            //         setIsRunning={() => setIsRunning()}
            //         prevCrushPower = {prevCrushPower}
            //         />
            //    </div>
            //    : 