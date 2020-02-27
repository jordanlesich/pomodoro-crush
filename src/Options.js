import React,{useState} from 'react'
import MenuButton from './MenuButton'
import Audio from './Audio'
import Timing from './Timing'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import sizes from './sizes'


const useStyles = makeStyles({ 
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        color: '#f6f6f6',
        maxWidth: '1000px',
    },
    title: {
        margin: '0 0 2rem 0',
        fontSize: '3rem',
        fontWeight: '500',
        [sizes.up('sm')] : {
            alignSelf: 'center',
            margin: '0 0 2rem 0',
            fontSize: '5rem',
        },
    },
    tabSpace: {
        width: '70%',
        [sizes.up('md')] : {
            width: '55%'
        },
        [sizes.up('lg')] : {
            width: '40%'
        },
    },
    tabBar: {
        // width: '50%',
        '& .MuiTab-textColorPrimary':{
            color: '#f6f6f6',
            fontFamily: 'Roboto Condensed',
            fontSize: '24px',
            fontWeight: '300',
            textTransfrom: 'none',
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
    menuButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'start'
    }
    
})



const FAQ = props => {

    const [tab, setTab] = useState(0);

    const {saveOptions, options} = props;

    const handleChange = (e, newTab) => {
        setTab(newTab);
      };

   

    const classes = useStyles(props)
    

    return(
       
        <div className={classes.root}>
            <div className={classes.menuButton}> <MenuButton /></div>
            <h1 className={classes.title}>OPTIONS</h1>
           <div className={classes.tabSpace}>
               <Tabs
                    className={classes.tabBar}
                    value={tab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="FAQ Tabs"
               >
                   <Tab label='Timing'/>
                   <Tab label='Audio'/>
               </Tabs>
               <Divider className={classes.topDivider}/>
            </div>
            
                {tab === 0? 
                <Timing 
                saveOptions={saveOptions} 
                options={options}
                /> 
                : 
                <Audio 
                saveOptions={saveOptions} 
                options={options}
                />
                }
            
        </div>
    )
}

export default FAQ