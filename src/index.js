import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './style.css';

import App from './containers/app';
import { createStore } from 'redux';
import redusers from './reducers';
import { getDate } from './actions';

const initialState = {
  photos: [],
  token: '',
};

const store = createStore(redusers, initialState);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
);
