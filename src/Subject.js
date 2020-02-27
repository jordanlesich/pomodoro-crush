import React from 'react'
import QuestionAnswer from './QuestionAnswer'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '100%',
        margin: '0rem 1rem 0rem 1rem',
    },
    topicTitle: {
        color: '#4f51b3',
        margin: '.5rem'
    },
    topicSpace:{
        paddingTop: '2rem'
    }

})

const Subject = props => {

    const classes = useStyles(props);
    const {topics, questions, answers} = props;

    return(
        <div className={classes.root}>
            {topics.map((topic, index ) => (
                <div className={classes.topicSpace} key={index}>
                <h2 className={classes.topicTitle} key={index}>{topic}</h2>
                {questions[index].map((question, i) => (
                    <QuestionAnswer 
                    question={question}
                    key={i}
                    answer={answers[index][i]}/>
                ))}
            </div>
            ))
            }
                            
        </div>
    )
}

export default Subject;

