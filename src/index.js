import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './style.css';

import LikesApp from './containers/app';
import { createStore } from 'redux';
import redusers from './reducers';
import { getDate } from './actions';

const initialState = {
  photos: [{id: 1, name: 'Ivan', link: 'link', photo: 'img', likes: 28, date: getDate()}],
  token: '',
};

const store = createStore(redusers, initialState);

ReactDOM.render(
  <LikesApp store={store} />,
  document.getElementById('app')
);