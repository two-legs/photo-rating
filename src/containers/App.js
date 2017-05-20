import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import RatingPage from '../pages/RatingPage/RatingPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={RatingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
