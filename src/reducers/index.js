import { combineReducers } from 'redux';

const photos = (state = [], action) => {

  switch (action.type) {
    case 'ADD_PHOTOS':
      
      return [
        ...state,
        { id: action.id, name: action.name, link: action.link, photo: action.photo, likes: action.likes, date: action.date },
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