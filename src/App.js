import React from 'react';
import useLocalStorageState from './Hooks/UseLocalStorageState'
import { TasksProvider } from './contexts/task.context';
import { SessionProvider } from './contexts/session.context';
import WorkSpace from './WorkSpace'
import Page from './Page'
import SideMenu from './SideMenu';
import FAQ from './FAQ'
import Options from './Options'

import {Route, Switch} from 'react-router-dom';

import './App.css';


function App() {
  
 


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
    <div className="App">
      <SessionProvider>
        <Page>
          <SideMenu />
        </Page>
          <Switch>
              <Route exact path="/faq">
                <Page>
                  <FAQ />
                </Page>
              </Route>
              <Route exact path="/options">
                <Page>
                  <Options saveOptions={saveOptions} options={options}/>
                </Page>
              </Route>
              <Route path="/">
                <TasksProvider>
                  <Page>
                    <WorkSpace options={options}/>
                  </Page>
                </TasksProvider>
              </Route>
          </Switch>
      </SessionProvider>
    </div>
  );
}

export default App;
