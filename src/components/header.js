import React from 'react';

const Header = (props) => {
  const { token } = props;

  const url = 'https://unsplash.com/oauth/authorize?client_id=010bPX24fabO7QjQIbd9bLcVQjHxcAeOVb6IzCYTNl0&redirect_uri=http://likes.tmweb.ru&response_type=code&scope=public+write_likes';

  function authorizate() {
    window.location.assign(url);
  }

  if (token) {
    return (
      <div
			className={'header'}
		>
      <div
        className={'header-container'}
      >
        <h1 className={'logo'}>
          <span>L</span><span>I</span><span>K</span><span>E</span><span>S</span>
        </h1>
        <span
          className={'auth-success'}
        >
          Вы авторизованы
        </span>
      </div>
		</div>
    )
  } else {
    return (
      <div
        className={'header'}
      >
        <div
          className={'header-container'}
        >
          <h1 className={'logo'}>
            <span>L</span><span>I</span><span>K</span><span>E</span><span>S</span>
          </h1>
          <a
            className={'auth'}
            onClick={ev => {
              ev.preventDefault();
              authorizate();
            }}
          >
            Авторизоваться
          </a>
        </div>
      </div>
    )
  }
}

export default Header;
