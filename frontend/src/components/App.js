//Dependences
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Home from '../pages/Home'
import Rym from '../components/Rym'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rym" component={Rym} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
