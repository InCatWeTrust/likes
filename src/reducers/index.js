import { combineReducers } from 'redux';

const photos = (state = [], action) => {

  switch (action.type) {
    case 'ADD_PHOTOS':

      return [
        ...state,
        ...action.array,
      ]

    case 'GET_LIKES':

      return state.map(photo => {
        if (photo.id === action.id) {
          return {id: photo.id, name: photo.name, link: photo.link, photo: photo.photo, likes: action.likes, date: photo.date, fullPhoto: photo.fullPhoto, liked: !photo.liked}
        } else {
          return photo
        }
      })

    default:
      return state
  };
};

const id = (state = '', action) => {

  switch (action.type) {
    case 'CURRENT_PHOTO':

    return action.id

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
  id,
});

export default redusers;
