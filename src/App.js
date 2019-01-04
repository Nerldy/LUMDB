/* eslint-disable no-console */
import React from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movies from './MoviesList';
import MovieDetail from './MovieDetail';


const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} alt="logo" className="App-logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
