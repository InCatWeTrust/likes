import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './style.css';

import { initState, saveState } from './components/localStorage';
import App from './containers/app';
import { createStore } from 'redux';
import redusers from './reducers';

const initialState = {
  photos: [],
  token: initState(),
  id: '',
};

const store = createStore(redusers, initialState);

store.subscribe(() => {
  saveState(store.getState().token);
});

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
);
