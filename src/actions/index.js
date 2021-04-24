export const addPhotos = (array) => {
  return {
    type: 'ADD_PHOTOS',
    array,
  }
}

export const getCurrentPhoto = (id) => {
  return {
    type: 'CURRENT_PHOTO',
    id,
  }
}

export const getToken = (tokenName) => {
  return {
    type: 'GET_TOKEN',
    token: tokenName,
  }
}

export const getLikes = (id, likes) => {
  return {
    type: 'GET_LIKES',
    id,
    likes,
  }
}
