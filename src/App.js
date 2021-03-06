import React from 'react';
import useLocalStorageState from './Hooks/UseLocalStorageState'
import { TasksProvider } from './contexts/task.context';
import { SessionProvider } from './contexts/session.context';
import WorkSpace from './WorkSpace'
import Div100vh from 'react-div-100vh'
import SideMenu from './SideMenu';
import FAQ from './FAQ'
import Options from './Options'

import {Route, Switch} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:'#0d0e17'
  }

})

function App() {
  
 const classes = useStyles()

 const initialOptions = JSON.parse(window.localStorage.getItem('options')) || {
    pomTime: 25,
    breakTime: 5,
    pomSound: 'timeWave',
    breakSound: 'chime'
};

  const [options, setOptions] = useLocalStorageState('options', initialOptions);
  
  const saveOptions = (data) => {
    const newOptions = {...options, ...data}
    setOptions(newOptions)
  }

  return (
    <div className={classes.root}>
      <SessionProvider>
          <SideMenu />
          <Switch>
              <Route exact path="/faq">
                  <FAQ />
              </Route>
              <Route exact path="/options">
                  <Options saveOptions={saveOptions} options={options}/>
              </Route>
              <Route path="/">
                <TasksProvider>
                  <Div100vh>
                    <WorkSpace options={options}/>
                  </Div100vh>
                </TasksProvider>
              </Route>
          </Switch>
      </SessionProvider>
    </div>
  );
}

export default App;
