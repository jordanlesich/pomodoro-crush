import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  questionText: {
      margin: '1rem .5rem 1rem .5rem',
      fontWeight: '300'
  },
  answerText: {
    margin: '1rem 1.5rem 1rem 1.5rem',
    lineHeight: '2',
    fontWeight: '300'
  },
  bottomDivider: {
    backgroundColor: '#090a0b',
    opacity: '1',
    height: '2px',
},
})

const QuestionAnswer = props => {
    const [open, setOpen] = React.useState(false);

    const {question, answer} = props
    const classes = useStyles(props)

    const handleClick = (e) => {
        setOpen(!open);
      };

      

    return(
            <div>
            <List className={classes.root}>
                <ListItem button onClick={handleClick}>
                <p className={classes.questionText}>{question}</p>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={handleClick} disableRipple={true} >
                        <p className={classes.answerText}>{answer}</p>
                </ListItem>
                </List>
            </Collapse>
                <Divider className={classes.bottomDivider}/>
            </List>
        </div>
    )
}

export default QuestionAnswer