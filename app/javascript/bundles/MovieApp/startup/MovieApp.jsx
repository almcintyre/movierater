import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/movieStore';
import MovieContainer from '../containers/MovieContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const MovieApp = (props) => (
  <Provider store={configureStore(props)}>
    <MovieContainer />
  </Provider>
);

export default MovieApp;
