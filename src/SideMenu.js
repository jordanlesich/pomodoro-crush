import React from 'react';
import useToggle from './Hooks/UseToggle'
import {Link} from 'react-router-dom';
import tomato from './tomato.svg'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import sizes from './sizes';


const useStyles = makeStyles({
    root: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0d0e17',
      color: '#f6f6f6',
      [sizes.up('md')] : {
        width: '80vw',
      },
      [sizes.up('lg')] : {
        width: '40vw',
      },
      [sizes.up('xl')] : {
        width: '30vw',
      },
    },
    list:{
        marginTop: '1rem',
    },
    mastHead : {
        fontFamily: `Roboto Condensed`,
        fontWeight: '300',
        fontSize: '40px',
        display: 'flex',
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
        height: '8rem'
    },
    listItem: {
      color: '#f6f6f6',
      fontSize: '30px',
      fontWeight: '300',
      textDecoration: 'none',
      '& p': {
          margin:'.3rem',
          cursor: 'pointer',
      },
    },

    highScore: {
        marginTop: '2rem'
    },
    menuOpen: {
      zIndex: '5',
      position: 'fixed',
      bottom: '4px',
      left: '10px',
      '& svg' : {
        color: '#f6f6f6',
        fontSize: '46px',
        opacity: '.3',
        [sizes.up('md')]: {
            fontSize: '50px'
        },
        [sizes.up('lg')]: {
            fontSize: '60px'
        }
      }
    },
    menuClose: {
      zIndex: '5',
      position: 'absolute',
      bottom: '4px',
      right: '10px',
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
    outerRightArrow:{
        [sizes.up('md')]: {
            display: 'none'
        }
    },
    innerCloseIcon:{
        display: 'none',
        [sizes.up('md')]: {
            display: 'block'
        }
    },
  })

const SideMenu = props => {

    const classes = useStyles(props);

    const [drawerOpen, toggleDrawer] = useToggle(false);

    const handleClick = e => {
        toggleDrawer()
      }
    
    const fullDrawer = () => (
            <div>
                <div
                    className={classes.root}
                    role="presentation"
                    onKeyDown={toggleDrawer}
                >
                <div>
                <h1 className={classes.mastHead}>Pomodoro<span className={classes.crush}>CRUSH</span></h1>
                
                </div>
                <img src={tomato} className={classes.tomato} alt='pixelized tomato'/>
                    <List className={classes.list}>
                        <Link to="/" className={classes.listItem}>
                            <ListItem button disableRipple={true} onClick={handleClick}>
                                <p>Start</p>
                            </ListItem>
                        </Link>
                        <Link to="/options" className={classes.listItem} onClick={handleClick}>
                            <ListItem button disableRipple={true}>
                                <p>Options</p>
                            </ListItem>
                        </Link>
                        <Link to="/faq" className={classes.listItem} onClick={handleClick}>
                            <ListItem button disableRipple={true}>
                                <p>FAQs</p>
                            </ListItem>
                        </Link>
                    </List>
                <p className={classes.highScore}>High Score: XXXXX</p>
                    <IconButton 
                className={classes.menuClose}
                aria-label="close menu" 
                onClick={handleClick}
                >
                    <ChevronRightIcon className={classes.outerRightArrow}/>
                    <CloseIcon className={classes.innerCloseIcon}/>
                </IconButton> 
                </div>
            </div>
    )

    return (
            <div>
                <Drawer open={drawerOpen} onClose={toggleDrawer}>
                {fullDrawer()}
                </Drawer>
                    <IconButton 
                    className={classes.menuOpen}
                    aria-label="open menu" 
                    onClick={handleClick}
                    >
                    <ChevronLeftIcon />
                    </IconButton>    
        </div>
    )
}

export default SideMenu