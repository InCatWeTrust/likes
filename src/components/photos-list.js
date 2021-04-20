import React from 'react';
import { Link } from 'react-router-dom';
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';

const unsplash = createApi({
  accessKey: "010bPX24fabO7QjQIbd9bLcVQjHxcAeOVb6IzCYTNl0",
  clientSecret: "aJ5ecEg3pWnsJ_mzbAAntUPX2GKfaVr6lM0TwgDZ8I0",
  redirectUri: "http://localhost:8080/auth",
  responseType: 'code',
  scope: 'public+read_user',
  fetch: nodeFetch,
});

console.log(unsplash);

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
      <a href='https://unsplash.com/oauth/authorize?client_id=010bPX24fabO7QjQIbd9bLcVQjHxcAeOVb6IzCYTNl0&redirect_uri=http://localhost:8080/auth&response_type=code&scope=public+write_likes'>Авторизоваться</a>
      <Link to='/about'><h3>About</h3></Link>
      <Link to='/'><h3>Home</h3></Link>
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