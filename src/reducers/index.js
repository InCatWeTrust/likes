const photos = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_PHOTOS':
      
      return Object.assign({}, state, {
        photos:  state.photos.concat(
            { id: action.id, name: action.name, link: action.link, photo: action.photo, likes: action.likes, date: action.date },
          )
    })

    // case 'REMOVE_COMMENT':
    //   return state.filter((comment) => comment.id !== action.id)

    default:
      return state;
  };
};
  
export default photos;