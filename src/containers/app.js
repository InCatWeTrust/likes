import React from 'react';
import { connect } from 'react-redux';

import Code from '../components/auth';
import PhotosList from '../components/photos-list';
import { addPhotos } from '../actions';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

let App = (props) => {
  const {
    photos, addPhotos
  } = props;

  return (
    <Router
      hashType={'slash'}
    >
      <div>
          <PhotosList photos={photos} addPhotos={addPhotos} />
      </div>
      <Switch>
      <Route path='/auth'></Route>
      <Route path='/about'>
        <div>
          <h3>About</h3>
        </div>
      </Route>
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPhotos: (newName, newLink, newPhoto, newLikes) => dispatch(addPhotos(newName, newLink, newPhoto, newLikes)),
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;