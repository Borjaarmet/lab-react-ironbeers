import React from 'react';
import Home from './components/Home';

import Beers from './components/Beers';
import RandomBeers from './components/RandomBeer';
import FormBeer from './components/FormBeer';
import SingleBeer from './components/SingleBeer';
import './App.css';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/beers" component={Beers} />
      <Route path="/random-beers" component={RandomBeers} />
      <Route path="/new-beer" component={FormBeer} />
      <Route path="/beer/:id" component={SingleBeer}></Route>
    </Switch>
  );
}

export default App;
