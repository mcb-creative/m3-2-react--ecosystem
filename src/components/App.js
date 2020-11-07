import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Header from './Header.js';
import ItemDetails from './ItemDetails';
import {
  BrowserRouter as Router,
  Link, 
  Route,
  Switch,
} from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
      <Header></Header>
  <Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/items/:itemId" component={ItemDetails}></Route>
  </Switch>
    </Router>
  )
};

export default App;
