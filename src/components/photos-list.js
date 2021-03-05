import React from 'react';

const PhotosList = (props) => {
  const { photos, addPhotos } = props;

  const newName = 'name';
  const newLink = 'link';
  const newPhoto = 'another photo';
  const newLikes = 99;

  return (
    <div
      className='container'
    >
      <ul
        className='photos-list'
      >
        {
          photos.map(photo => {
            const className = 'photos-list__photo'

            return (
              <li
                key={photo.id}
                className={className}
              >
                <p>{photo.name}</p>
                <a>{photo.link}</a>
                <span>{photo.photo}</span>
                <span>{photo.likes}</span>
                <span>{photo.date}</span>
              </li>
            )
          })
        }
      </ul>
      <button
        className='btn'
        onClick={ev => {
          ev.preventDefault();
          addPhotos(newName, newLink, newPhoto, newLikes);
        }}
      >
        Загрузить ещё
      </button>
    </div>
  )
}

export default PhotosList;