import React, {createContext} from 'react';
import UseLocalStorageState from '../Hooks/UseLocalStorageState';
// import {useLocalStorageReducer} from '../Hooks/useLocalStorageReducer'
// import taskReducer from '../reducers/task.reducer'

const currentDate = JSON.stringify(new Date().getDate())
const defaultGameState = 
            {
            points: 0,
            crushPower: 0,
            lastDate: currentDate,
            finishedPoms: 0,
            highScore: 0,
            }
const defaultOptions = JSON.parse(window.localStorage.getItem('options')) || {
                pomTime: 25,
                breakTime: 5,
                pomSound: 'timeWave',
                breakSound: 'chime'
    };
    
export const GameStateContext = createContext()
// export const DispatchContext = createContext()

export const GameStateProvider = props => {

//    const {tasks} = useContext(TasksContext) 
   const [gameState, setGameState] = UseLocalStorageState('gameState', defaultGameState)
   const [options, setOptions] = UseLocalStorageState('options', defaultOptions)
   
const persistStreak = (currentDay) => {
    setGameState({
        points: 0,
        crushPower: gameState.crushPower,
        lastDate: currentDay,
        finishedPoms: gameState.finishedPoms,
        highScore: gameState.highScore
    })
}
const endStreak = (currentDay) => {
    setGameState({
        points: 0,
        crushPower: 0,
        lastDate: currentDay,
        finishedPoms: 0,
        highScore: gameState.highScore
    })
}

const finishPomPts = (pts, cp) => {

        if (gameState.points + pts >= gameState.highScore){
            setGameState({...gameState, 
                points: gameState.points + pts, 
                crushPower: gameState.crushPower + cp,
                finishedPoms: gameState.finishedPoms + 1, 
                highScore: gameState.points + pts
            })
        }
        else{
            setGameState({...gameState, 
                points: gameState.points + pts, 
                crushPower: gameState.crushPower + cp,
                finishedPoms: gameState.finishedPoms + 1, 
            })
        }
    }
return(
    <GameStateContext.Provider value={{
        gameState, 
        setGameState, 
        finishPomPts, 
        persistStreak, 
        endStreak, 
        options,
        setOptions
        }} >
            {props.children}
    </GameStateContext.Provider>
);
}
