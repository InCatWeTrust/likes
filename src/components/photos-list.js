import React from 'react';
import { Link } from 'react-router-dom';
import { createApi } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroll-component';

let pageNumber = 1;

const PhotosList = (props) => {
  const { photos, addPhotos, getCurrentPhoto } = props;
  let list = [];

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

  if (pageNumber === 1) {
    getList(pageNumber);

    pageNumber += 1;
  }

  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={() => {
        getList(pageNumber);
        pageNumber += 1;
      }}
      hasMore={true}
    >
    <div
      className='container'
    >
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

          getList(pageNumber);

          pageNumber += 1;
        }}
      >
        Загрузить ещё
      </button>
    </div>
    </InfiniteScroll>
  )
}

export default PhotosList;
