import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './style.css';

import LikesApp from './containers/app';
import { createStore } from 'redux';
import photos from './reducers';
import { getDate } from './actions';

const initialState = {
  photos: [{id: 1, name: 'Ivan', link: 'link', photo: 'img', likes: 28, date: getDate()}],
};

const store = createStore(photos, initialState);

ReactDOM.render(
  <LikesApp store={store} />,
  document.getElementById('app')
);