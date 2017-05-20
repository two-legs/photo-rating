import React, { Component } from 'react';
import PhotoRating from './PhotoRating/PhotoRating'; 

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
         <div className="container">
          <PhotoRating /> 
        </div>
      </div>
    );
  }
}

export default App;
