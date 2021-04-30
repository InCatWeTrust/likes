import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function Photo(props) {
  const { photos, id, token, getLikes } = props;
  let photo;
  let likeClass = '';

  const photoRef = useRef('');
  const preloaderRef = useRef('');

  if (!id) {
    window.location.assign('/');
  }

  document.body.style.overflowY = 'hidden';

  photos.forEach(item => {
    if (item.id === id) {
      item.liked ? likeClass = 'photo-container__liked' : likeClass = 'photo-container__unliked';
      photo = {
        id: item.id,
        name: item.name,
        link: item.link,
        photo: item.fullPhoto,
        likes: item.likes,
        date: item.date,
        liked: item.liked,
      }
    }
  });

  function enableScroll() {
    document.body.style.overflowY = '';
  }

  async function like() {
    await fetch(`https://api.unsplash.com/photos/${id}/like`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
  }

  async function unlike() {
    await fetch(`https://api.unsplash.com/photos/${id}/like`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
  }

  function likePhoto() {
    if (token) {
      if (photo.liked) {
        const likes = photo.likes - 1;
        unlike().then(getLikes(id, likes))
      } else {
        const likes = photo.likes + 1;
        like().then(getLikes(id, likes))
      }
    }
  }

  return (
    <div
      className={'photo'}
    >
      <div ref={preloaderRef} className={'preloader-container'}>
        <div className={'preloader'}><div></div><div></div></div>
      </div>
      <Link to='/' onClick={enableScroll}><div className={'close'}></div></Link>
      <div
        className={'photo-container'}
        ref={photoRef}
        style={{opacity: 0, transition: 'opacity 500ms ease'}}
      >
        <div
          className={'photo-container__head'}
        >
          <div
            className={'photo-container__text'}
          >
            <span className={'photo-container__span'}>Author:</span>
            <a className={'photo-container__link'} href={photo.link}>
              {photo.name}
            </a>
          </div>
          <div
            className={'photo-container__likes-block'}
          >
            <div className={likeClass} onClick={likePhoto}></div>
            <span
              className={'photo-container__likes'}
            >
              {photo.likes}
            </span>
          </div>
        </div>
        <Link to='/' onClick={enableScroll}><img
          className={'photo-container__photo'}
          src={photo.photo}
          onLoad={() => {
            photoRef.current.style.opacity = '1';
            setTimeout(() => {
              preloaderRef.current.style.opacity = '0';
            }, 200)
          }}
        ></img></Link>
        <div
          className={'photo-container__bottom'}
        >
          <span>{`Uploaded ${photo.date[2]}.${photo.date[1]}.${photo.date[0]}`}</span>
        </div>
      </div>
    </div>
  )
}

export default Photo;
