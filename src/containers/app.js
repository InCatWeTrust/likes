import React from 'react';
import { connect } from 'react-redux';

import PhotosList from '../components/photos-list';
// import CommentsList from '../components/comments-list';
// import AddComment from '../components/add-comment';

import { addPhotos } from '../actions';

let App = (props) => {
    const {
        photos, addPhotos
    } = props;

    return (
        <div>
            <PhotosList photos={photos} addPhotos={addPhotos} />
        </div>
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