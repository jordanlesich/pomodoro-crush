import React, {useContext, useEffect} from 'react';
import {SessionContext} from './contexts/session.context';
import sizes from './sizes';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    menuOpen: {
        padding: '0',
        alignSelf: 'flex-start',
        justifySelf: 'flex-start',
        [sizes.up('lg')]: {
            gridRow: '1',
            gridColumn: '1'
        },
        '& svg' : {
          color: '#f6f6f6',
          fontSize: '2rem',
          opacity: '.3',
          transition: 'ease-in-out .1s',
          [sizes.up('md')]: {
              fontSize: '3rem'
            },
           [sizes.up('lg')]: {
               fontSize: '4rem',
               transform: 'translateX(-1rem)'
           }
           
         
        },

      },
})


const MenuButton = props => {

    const {drawerOpen, toggleDrawer} = useContext(SessionContext)
    const classes = useStyles(props)


    const handlePress = e => {
            e.key === 'Escape' && toggleDrawer()
    }

    useEffect(() => {
        window.addEventListener('keydown', handlePress)
        return () => {
          window.removeEventListener('keydown', handlePress)
        };
      })

    return(
        <IconButton 
            className={classes.menuOpen}
            aria-label="open menu" 
            onClick={toggleDrawer}
        >
            {drawerOpen? 
            <ChevronRightIcon/>
            :
            <ChevronLeftIcon />
    }
        </IconButton>   
    )

}

export default MenuButton