import React, { Component } from 'react';
import RatedPhoto from './components/RatedPhoto/RatedPhoto';
import Grid from './components/Grid/Grid';
import logo from './logo.svg';

import './App.css';

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        { id: 1, url: 'img/1.jpg', rating: 0 },
        { id: 2, url: 'img/2.jpg', rating: 0 },
        { id: 3, url: 'img/3.jpg', rating: 0 },
        { id: 4, url: 'img/4.jpg', rating: 0 },
        { id: 5, url: 'img/5.jpg', rating: 0 },
        { id: 6, url: 'img/6.jpg', rating: 0 },
        { id: 7, url: 'img/7.jpg', rating: 0 },
        { id: 8, url: 'img/8.jpg', rating: 0 },
        { id: 9, url: 'img/9.jpg', rating: 0 },
        { id: 10, url: 'img/10.jpg', rating: 0 }
      ]
    };
  }

  render() {
    return (
      <div className="App">
         <div className="container">
         
        </div>
      </div>
    );
  }
}

export default App;
