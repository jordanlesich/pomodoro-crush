import React,{useState} from 'react'
import {faqData} from './FAQ_Data'
import Subject from './Subject'
import MenuButton from './MenuButton'
import sizes from './sizes'

import SimpleBar from 'simplebar-react';
import './simplebar.css';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({ 
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#f6f6f6',
        height: '100%',
        width: '100%',
        maxWidth:'1000px',
        
        [sizes.up('md')]:{
            maxWidth: '767px',
            fontSize: '1.4rem'
        },
        
    },
    title: {
        margin: '0 0 2rem 2rem',
        fontSize: '3rem',
        fontWeight: '500',
        [sizes.up('sm')] : {
            alignSelf: 'center',
            marginBottom: '0 0 2rem 0',
            fontSize: '5rem',
        }
    },
    bottomSection: {
       height: '15%'
    },
    tabBar: {
        '& .MuiTab-textColorPrimary':{
            color: '#f6f6f6',
            fontFamily: 'Roboto Condensed',
            fontSize: '24px',
            fontWeight: '300',
            textTransfrom: 'none'
        },

        '.MuiTab-textColorPrimary.Mui-selected' : {
            color: '#3f51b5',
           
        },
        '& .MuiTabs-flexContainer': {
        justifyContent: 'space-around'
    }
    },
    topDivider: {
        backgroundColor: 'black',
        opacity: '1',
        marginTop: '1rem',
        height: '2px'
    },

    mainSection: {
        display: 'flex',
        justifyContent: 'end',
        height: '53vh',
        [sizes.up('sm')]:{
            height: '62vh'
        }
    },
    menuButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'start'   
    }
})
)


const FAQ = props => {

    const [tab, setTab] = useState(0);
    const selectedData = faqData[tab]

    const handleChange = (e, newTab) => {
        setTab(newTab);
      };
    

    const classes = useStyles(props)
    
    
    const {subjectTopics, subjectQuestions, subjectAnswers} = selectedData;

    return(
       
        <div className={classes.root}>
            <div className={classes.MenuButton}><MenuButton /></div>
            <h1 className={classes.title}>FAQs</h1>
           <div>
               <Tabs
                    className={classes.tabBar}
                    value={tab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="FAQ Tabs"
               >
                   <Tab label='About'/>
                   <Tab label='Game Rules'/>
               </Tabs>
               <Divider className={classes.topDivider}/>
            </div>
            <SimpleBar 
            className={classes.mainSection}
            forceVisible="y" 
            autoHide={false}
            >
           <Subject 
             topics={subjectTopics}
             questions={subjectQuestions}
             answers={subjectAnswers}
           />
           </SimpleBar>
           <div className={classes.bottomSection}>

           </div>
        </div>
    )
}

export default FAQ