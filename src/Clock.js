import React, {useState} from 'react';
import useInterval from './Hooks/UseInterval';
import CircleTimer from './CircleTimer';
import {playSFX} from './SFXPlayer';


const Clock = (props) => {

    const {isPom, isRunning, toggleIsRunning, pomComplete, color, setIsPom, options} = props;

    const DEFAULT_POM = options.pomTime;
    const DEFAULT_BREAK = options.breakTime;

    const breakSeconds = DEFAULT_BREAK * 60;
    const pomSeconds = DEFAULT_POM * 60;

    const [time, setTime] = useState(isPom? pomSeconds : breakSeconds);
    
    useInterval(() => {
        setTime(time - 1);
      }, isRunning? 10: null);


    const seconds = time % 60;
    const minutes = Math.floor(time / 60);

    const strSeconds  = seconds< 10 ? `0${seconds}` : `${seconds}`
    const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

    const toggleClock = () =>{
        toggleIsRunning()
    }

    if (time <= 0){
        toggleClock()
        if(isPom){
            setTime(breakSeconds)
            pomComplete()
            playSFX(options.pomSound)
            setIsPom(false)
        }  
        else { 
            setTime(pomSeconds);
            playSFX(options.breakSound)
            setIsPom(true);
        }
    }

    const percentageFinished =  100 - (isPom? time / pomSeconds * 100 : time / breakSeconds * 100)  
    const displayText =  `${strMinutes}:${strSeconds}`
     
    return(
        <div >
        <CircleTimer 
            strokeWidth="5"
            sqSize='250'
            percentage={percentageFinished}
            innerText={displayText}
            fontSize={'4.2rem'}
            color={color}
        />
        </div>
    
    )


}

export default Clock;