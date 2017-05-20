import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

const defaultState = {
  photoRating: [
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

const store = createStore(reducer, defaultState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
