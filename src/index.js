import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './containers';
import reducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

const defaultState = {
  // http://ibb.co/album/m1wRgF
  photoRating: [
    { id: 1, url: 'https://image.ibb.co/dpFDvv/1.jpg', rating: 0 },
    { id: 2, url: 'https://image.ibb.co/cp46Fv/2.jpg', rating: 0 },
    { id: 3, url: 'https://image.ibb.co/gp2F8F/3.jpg', rating: 0 },
    { id: 4, url: 'https://image.ibb.co/fKxhoF/4.jpg', rating: 0 },
    { id: 5, url: 'https://image.ibb.co/i2WWha/5.jpg', rating: 0 },
    { id: 6, url: 'https://image.ibb.co/mPvrha/6.jpg', rating: 0 },
    { id: 7, url: 'https://image.ibb.co/mQmmFv/7.jpg', rating: 0 },
    { id: 8, url: 'https://image.ibb.co/hvTNoF/8.jpg', rating: 0 },
    { id: 9, url: 'https://image.ibb.co/cob8TF/9.jpg', rating: 0 },
    { id: 10, url: 'https://image.ibb.co/hLArha/10.jpg', rating: 0 },
    { id: 11, url: 'https://image.ibb.co/hNhRFv/11.jpg', rating: 0 },
    { id: 12, url: 'https://image.ibb.co/kHYNoF/12.jpg', rating: 0 }
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
