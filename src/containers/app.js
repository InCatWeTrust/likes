import React from 'react';
import { connect } from 'react-redux';

import PhotosList from '../components/photos-list';
import { addPhotos } from '../actions';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

let App = (props) => {
  const {
    photos, addPhotos
  } = props;

  return (
    <Router
      hashType={'noslash'}
    >
      <div>
          <PhotosList photos={photos} addPhotos={addPhotos} />
      </div>
      <Switch>
      <Route path='/' exact>
        <div>
          <h3>Home</h3>
        </div>
      </Route>
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
    photos: state
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