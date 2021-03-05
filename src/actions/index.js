import  { v4 } from 'uuid';
let newId = 2;
export const getDate = () => {
  const currentDate = new Date();
  const date = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
  return date; 
};

// action creators

export const addPhotos = (newName, newLink, newPhoto, newLikes) => {
  return {
    type: 'ADD_PHOTOS',
    id: newId++,
    name: newName,
    link: newLink,
    photo: newPhoto,
    likes: newLikes,
    date: getDate()
  }
}

// export const removeComment = (id) => {
//   return {
//     type: 'REMOVE_COMMENT',
//     id: id
//   }
// }