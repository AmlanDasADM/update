import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router ,  Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Skill from './components/Skill/Skill';
import ReactGA from 'react-ga';
import FormData23 from './admin-panel/FormData';



function App()
{
 useEffect(() => {
  ReactGA.initialize('UA-216352185-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
 }, [])
   


  

  return (
    <>
    <div className='app'>
    <Router>
      <Navbar  />
      <Switch>
        <Route exact path="/">
          <Skill  />
        </Route> 
        <Route exact path="/get">
          <FormData23  />
        </Route> 
        </Switch>
      </Router>    
    
      </div>
    </>
  );
}

export default App;
