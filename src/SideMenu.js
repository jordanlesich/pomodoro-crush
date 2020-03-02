import React, {useState, useEffect, useContext} from 'react';
import {SessionContext} from './contexts/session.context'
import {Link, useHistory } from 'react-router-dom';
import tomato from './imgs/tomato.svg'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import sizes from './sizes';
import { GameStateContext } from './contexts/gameState.context';



const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100%',
        width: '100vw',
        backgroundColor: '#0d0e17',
        color: '#f6f6f6',
      [sizes.up('md')] : {
        width: '50vw',
      },
      [sizes.up('lg')] : {
        width: '40vw',
      },
      [sizes.up('xl')] : {
        width: '30vw',
      },
    },
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
    },
    list:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '40%',
        marginTop: '1rem',
    },
    listArrow: {
        position: 'fixed',
        transform: 'translateX(-3rem)',
        color: '#f6f6f6'
    },
    listItem: {
      color: '#f6f6f6',
      fontFamily: `'Press Start 2P'`,
      fontSize: '1rem',
      textDecoration: 'none',
      padding: '.8rem',
      '& p': {
          margin:'.3rem',
          cursor: 'pointer',
      },
    },
    mastHead : {
        fontFamily: `Roboto Condensed`,
        fontWeight: '300',
        fontSize: '2.3rem',
        display: 'flex',
        marginTop: '4rem',
    },
    crush:{
        fontFamily: `'Press Start 2P'`,
        color:'#9b161a',
        fontWeight:'500',
        fontStyle: 'italic',
        textTransform: 'uppercase',
        textDecoration: 'underline',
        fontSize:'.8em',
        alignSelf: 'center'
    },
    tomato:{
        opacity: '0.2',
        objectFit: 'contain',
        maxHeight: '25%'
    },
    highScore: {
        margin: '2rem',
        fontFamily: `'Press Start 2P'`,
        fontSize: '.6rem',
    },
    menuClose: {
      zIndex: '5',
      position: 'absolute',
      top: '0px',
      right: '0px',
      padding: '0',
      '& svg' : {
        color: '#f6f6f6',
        fontSize: '46px',
        opacity: '.3',
        [sizes.up('md')]: {
            fontSize: '50px'
        },
        [sizes.up('lg')]: {
            fontSize: '55px'
        }
      }
    },
  })

const SideMenu = props => {

    const classes = useStyles(props);

    const {drawerOpen, toggleDrawer} = useContext(SessionContext);
    const {gameState} = useContext(GameStateContext)
    const history = useHistory()
    const [listItemSelected, setListItemSelected] = useState(0)

    const pageRefs = ['', 'options', 'faq']


    const changePage = (page) => {
        history.push(`./${pageRefs[page]}`)
        toggleDrawer()
    }


    const handleKeyPress = e => {
        if(drawerOpen){
            e.preventDefault()  
        switch(e.key) {
            case 'ArrowUp':
                listItemSelected === 0? setListItemSelected(2) : setListItemSelected(listItemSelected - 1)
            break;
            case 'ArrowDown':
                listItemSelected === 2 ? setListItemSelected(0) : setListItemSelected (listItemSelected + 1)
            break;
            case 'Tab':
                listItemSelected === 2 ? setListItemSelected(0) : setListItemSelected (listItemSelected + 1);    
            break; 
            case 'Enter':
                changePage(listItemSelected)
            break;
            default:
                return
        }
    }
}

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        return () => 
            { window.removeEventListener('keydown', handleKeyPress)
        }
    })


    const handleClick = e => {
        toggleDrawer()
      }
    
    const fullDrawer = () => (
            <div  className={classes.root}>
                <div
                    className={classes.panel}
                    role="presentation"
                    onKeyDown={toggleDrawer}
                >
                
                <h1 className={classes.mastHead}>Pomodoro<span className={classes.crush}>CRUSH</span></h1>

                <img src={tomato} className={classes.tomato} alt='pixelized tomato'/>
                    <List className={classes.list}>
                        <Link to="/" className={classes.listItem}>
                            <ListItem button disableRipple={true} onClick={handleClick} selected={listItemSelected===0} >
                                {listItemSelected === 0 &&
                                <ListItemIcon className={classes.listArrow}>
                                    <PlayArrowIcon/>
                                </ListItemIcon>
                                }
                                <p>Start</p>
                            </ListItem>
                        </Link>
                        <Link to="/options" className={classes.listItem}>
                            <ListItem button disableRipple={true} onClick={handleClick} selected={listItemSelected===1}>
                            {listItemSelected === 1 &&
                                <ListItemIcon className={classes.listArrow}>
                                    <PlayArrowIcon/>
                                </ListItemIcon>
                                }
                                <p>Options</p>
                            </ListItem>
                        </Link>
                        <Link to="/faq" className={classes.listItem}>
                            <ListItem button disableRipple={true}  onClick={handleClick} selected={listItemSelected===2}>
                            {listItemSelected === 2 &&
                                <ListItemIcon className={classes.listArrow}>
                                    <PlayArrowIcon/>
                                </ListItemIcon>
                                }
                                <p>FAQs</p>
                            </ListItem>
                        </Link>
                    </List>
                    <p className={classes.highScore}>High Score: {gameState.highScore}</p>
                </div>
            </div>
    )

    return (
            <div>
                <Drawer open={drawerOpen} onClose={toggleDrawer}>
                {fullDrawer()}
                </Drawer>
                     
        </div>
    )
}

export default SideMenu