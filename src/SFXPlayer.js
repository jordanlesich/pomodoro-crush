
import timeWaveSrc from './Audio/timeWave.mp3'
import theHorrorSrc from './Audio/theHorror.mp3'
import chimeSrc from './Audio/chime.mp3'
import glockenspielSrc from './Audio/glockenspiel.mp3'
import sheepSrc from './Audio/sheep.mp3'
import cowbellSrc from './Audio/cowbell.mp3'
import {Howl} from 'howler'

const chime = new Howl({
    src:[chimeSrc]
})
const timeWave = new Howl({
    src:[timeWaveSrc]
})
const theHorror = new Howl({
    src:[theHorrorSrc]
})
const glockenspiel = new Howl({
    src:[glockenspielSrc]
})
const cowbell = new Howl({
    src:[cowbellSrc]
})
const sheep = new Howl({
    src:[sheepSrc]
})

const sounds = {
chime : chime, 
timeWave : timeWave, 
theHorror : theHorror, 
glockenspiel : glockenspiel, 
cowbell : cowbell, 
sheep: sheep
}

const playSFX = sfx => {
    sounds[sfx].play()
}

export {playSFX}; 