import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createApi } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './loader';

const PhotosList = (props) => {
  const { photos, addPhotos, getCurrentPhoto, token, getToken } = props;
  let list = [];

  const pageNumber = useRef(1);
  const preloaderRef = useRef('');

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloaderRef.current.style.opacity = '0';
      preloaderRef.current.style.pointerEvents = 'none';
    }, 300)
  })

  const code = location.search.split('code=')[1];

  const url = 'https://unsplash.com/oauth/token';

  const getResourse = async () => {
    const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        client_id: "010bPX24fabO7QjQIbd9bLcVQjHxcAeOVb6IzCYTNl0",
        client_secret: "aJ5ecEg3pWnsJ_mzbAAntUPX2GKfaVr6lM0TwgDZ8I0",
        redirect_uri: "http://localhost:8080",
        code: code,
        grant_type: "authorization_code",
    }),
    });
    if (response.status === 400) {
      window.location.assign('/')
    }
    else if (!response.ok) {
      throw new Error(`Ошибка со статус кодом ${response.status}`)
    }

    const accessToken = await response.json();
    return accessToken["access_token"];
  }

  if (code && photos.length !== 0 && !token) {
    getResourse().then(res => getToken(res));
  }

  async function getList(page) {
    const unsplash = await createApi({
      accessKey: '010bPX24fabO7QjQIbd9bLcVQjHxcAeOVb6IzCYTNl0',
    });

    unsplash.photos.list({page: page}).then(result => {

      result.response.results.map(photo => {
        let sameId = false;

        photos.forEach(item => {
          if (item.id === photo.id) {
            sameId = true;
          }
        })

        if (sameId) {
          return
        }

        list.push({
          id: photo.id,
          name: photo.user.name,
          link: photo.user.links.html,
          photo: photo.urls.small,
          likes: photo.likes,
          date: photo["created_at"].slice(0, photo["created_at"].indexOf('T')).split('-'),
          fullPhoto: photo.urls.full,
          liked: photo["liked_by_user"],
        })
      });
      addPhotos(list);

      list = [];
    });
  }

  useEffect(() => {
    getList(pageNumber.current);

    pageNumber.current += 1;
  }, [])

  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={() => {
        getList(pageNumber.current);
        pageNumber.current += 1;
      }}
      hasMore={true}
    >
    <div
      className='container'
    >
      <div ref={preloaderRef} className={'preloader-container-main'}>
        <div className={'preloader'}><div></div><div></div></div>
      </div>
      <ul
        className='photos-list'
      >
        {
          photos.map(photo => {
            const className = 'photos-list__photo';

            return (
              <li
                key={photo.id}
                className={className}
              >
                <a
                  className={'photos-list__link'}
                  href={photo.link}
                >
                  {photo.name}
                </a>
                <Link
                  to='/photo'
                  onClick={() => {
                    getCurrentPhoto(photo.id);
                  }}
                ><img
                  className={'photos-list__img'}
                  src={photo.photo}
                >
                </img>
                </Link>
                <span
                  className={'photos-list__likes'}
                >{`${photo.likes} likes`}</span>
                <span
                  className={'photos-list__date'}
                >Uploaded {`${photo.date[2]}.${photo.date[1]}.${photo.date[0]}`}</span>
              </li>
            )
          })
        }
      </ul>
      <button
        className='btn'
        onClick={ev => {
          ev.preventDefault();

          getList(pageNumber.current);

          pageNumber.current += 1;
        }}
      >
        Загрузить ещё
      </button>
    </div>
    </InfiniteScroll>
  )
}

export default PhotosList;
