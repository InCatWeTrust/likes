import React from 'react';
import { connect } from 'react-redux';

import PhotosList from '../components/photos-list';
import Header from '../components/header';
import Photo from '../components/photo';
import { addPhotos, getToken, getCurrentPhoto, getLikes } from '../actions';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

let App = (props) => {
  const {
    photos, addPhotos, token, getToken, id, getCurrentPhoto, getLikes
  } = props;

  return (
    <Router
      hashType={'slash'}
    >
      <div>
        <Header token={token} />
        <PhotosList photos={photos} addPhotos={addPhotos} getCurrentPhoto={getCurrentPhoto} token={token} getToken={getToken} />
        <Switch>
          <Route path='/photo'><Photo photos={photos} id={id} token={token} getLikes={getLikes} /></Route>
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    token: state.token,
    id: state.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPhotos: (newName, newLink, newPhoto, newLikes) => dispatch(addPhotos(newName, newLink, newPhoto, newLikes)),
    getToken: (token) => dispatch(getToken(token)),
    getCurrentPhoto: (id) => dispatch(getCurrentPhoto(id)),
    getLikes: (id, likes) => dispatch(getLikes(id, likes)),
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
