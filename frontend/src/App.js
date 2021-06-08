import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './global.css';

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
    <Switch>
        <Route exact  path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard}/>
    </Switch>
    </Router>
  );
}

console.log("batata")



export default App;
