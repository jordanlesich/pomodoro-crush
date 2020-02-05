import React,{useState} from 'react'
import Audio from './Audio'
import Timing from './Timing'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import sizes from './sizes'


const useStyles = makeStyles(theme => ({ 
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.backgroundColor,
        color: '#f6f6f6',
        position: 'absolute',
        height: '100%',
        width:'100%',
        marginTop: '5rem',
        [sizes.up('md')]:{
            maxWidth: '767px',
        }
    },
    title: {
        margin: '0 0 2rem 2rem',
        fontSize: '3rem',
        fontWeight: '500',
        [sizes.up('sm')] : {
            alignSelf: 'center',
            marginBottom: '0 0 2rem 0',
            fontSize: '5rem',
        },
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
    
    
})
)


const FAQ = props => {

    const [tab, setTab] = useState(0);
    

    const {saveOptions, options} = props;

    const handleChange = (e, newTab) => {
        setTab(newTab);
      };

   

    const classes = useStyles(props)
    

    return(
       
        <div className={classes.root}>
            <h1 className={classes.title}>OPTIONS</h1>
           <div>
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