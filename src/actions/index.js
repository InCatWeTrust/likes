export const addPhotos = (array) => {
  return {
    type: 'ADD_PHOTOS',
    array,
  }
}

export const getToken = (tokenName) => {
  return {
    type: 'GET_TOKEN',
    token: tokenName,
  }
}
