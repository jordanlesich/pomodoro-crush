import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core'
import tomato from './tomato.svg'
import sizes from './sizes'
import { GameStateContext } from './contexts/gameState.context';


const useStyles =  makeStyles({
    root: {
        display: 'flex',
        width: '90%',
        height: '4%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        fontFamily: `'Press Start 2P'`,
        fontSize: '.6rem',
        [sizes.up("md")]: {
            width: '80%'
        },
        [sizes.up("lg")]: {
            width: '100%',
            gridRow: '2',
            gridColumn: '1/3',
            display: 'flex',
        },
    },
    pomFinished: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    text: {
        fontWeight: '400',
        
        opacity: '0.6',
        margin: '0rem',
        [sizes.up("sm")]: {
        fontSize: '1rem'
           
        },
        [sizes.up("md")]: {
        fontSize: '1.3rem'
           
        }
    },
    tomato: {
        marginRight: '6px',
        height: '1.3rem',
        
        [sizes.up('lg')]: {
            height: '2rem'
        } 
    }
})



const ScoreBoard = props => {

    const classes =  useStyles(props)

    const {gameState} = useContext(GameStateContext);
    const {finishedPoms, points, crushPower} = gameState

    return(
        <div className={classes.root}>
            <div className={classes.pomFinished}>
                <img className={classes.tomato} src={tomato} alt='pizelized tomato'/>
                <p className={classes.text}>{`x ${finishedPoms}`}</p>
            </div>
            <div>
                <p className={classes.text}> {points} </p>
            </div>
            <div>
                <p className={classes.text}>CP: {crushPower} </p>
            </div>
        </div>
    );
}

export default ScoreBoard;