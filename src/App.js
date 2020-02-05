import React,{useState, useEffect} from 'react';
import WorkSpace from './WorkSpace'
import {Route, Switch} from 'react-router-dom';
import FAQ from './FAQ'
import Options from './Options'
import './App.css';
import SideMenu from './SideMenu';


function App() {
  
 const initialOptions = JSON.parse(window.localStorage.getItem('options')) || {
    pomTime: 25,
    breakTime: 5,
    pomSound: 'timeWave',
    breakSound: 'chime'
};

  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    window.localStorage.setItem('options', JSON.stringify(options))
  },[options]);


  const saveOptions = (data) => {
    const newOptions = {...options, ...data}
    setOptions(newOptions)
  }

const sessionDay = 1

  return (
    <div className="App">
      <SideMenu />
      <Switch>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/options">
            <Options saveOptions={saveOptions} options={options}/>
          </Route>
          <Route path="/">
            <WorkSpace sessionDay={sessionDay} options={options}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
