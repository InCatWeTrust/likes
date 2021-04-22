import { combineReducers } from 'redux';

const photos = (state = [], action) => {

  switch (action.type) {
    case 'ADD_PHOTOS':

      return [
        ...state,
        ...action.array,
      ]

    default:
      return state
  };
};

const token = (state = '', action) => {

  switch (action.type) {
    case 'GET_TOKEN':

      return action.token

    default:
      return state
  };
};

const redusers = combineReducers({
  photos,
  token,
});

export default redusers;
