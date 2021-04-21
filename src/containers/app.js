import React from 'react';
import { connect } from 'react-redux';

import PhotosList from '../components/photos-list';
import Auth from '../components/auth';
import Header from '../components/header';
import { addPhotos, getToken } from '../actions';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

let App = (props) => {
  const {
    photos, addPhotos, token, getToken
  } = props;

  return (
    <Router
      hashType={'slash'}
    >
      <div>
        <Header token={token} />
        <PhotosList photos={photos} addPhotos={addPhotos} />
        <Switch>
          <Route path='/auth'><Auth token={token} getToken={getToken} /></Route>
          <Route path='/about'>
            <div>
              <h3>About</h3>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    token: state.token,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPhotos: (newName, newLink, newPhoto, newLikes) => dispatch(addPhotos(newName, newLink, newPhoto, newLikes)),
    getToken: (token) => dispatch(getToken(token)),
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
