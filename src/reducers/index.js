const photos = (state = [], action) => {

  switch (action.type) {
    case 'ADD_PHOTOS':
      return [
        ...state,
        { id: action.id, name: action.name, link: action.link, photo: action.photo, likes: action.likes, date: action.date },
      ]

    // case 'REMOVE_COMMENT':
    //   return state.filter((comment) => comment.id !== action.id)

    default:
      return state;
  };
};
  
  export default photos;