import React, {useState} from 'react'

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import sizes from './sizes'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        textAlign: 'right',
        flex: 1,
        '& svg': {
            color: '#8a8889',
            [sizes.up("lg")] : {
                fontSize: '2rem'
            }
        },
        
    }
})



const SingleTaskMenu = props => {

    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles(props)
    const {editTask, deleteTask, handleSubmit, isForm, isRunning} = props;


    const handleMenuClick = e => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

     const handleEdit = e => {
        e.stopPropagation()
        editTask();
        setAnchorEl(null);
     }

     const handleDelete= e => {
         e.stopPropagation()
         deleteTask()
     }

    return (
        <div className={classes.root}>
        {  
        isForm?
            <IconButton onClick={handleSubmit}>
                <CheckIcon />
            </IconButton>
            :
            <div>
            <IconButton onClick={handleMenuClick} disabled={isRunning}>
                <MoreVertIcon />
            </IconButton>
                <Menu 
                    id="Single task menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                </Menu>
            </div>
        }
        </div>
    )
}

export default SingleTaskMenu;