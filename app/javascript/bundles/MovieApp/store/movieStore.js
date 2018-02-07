import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from '../reducers/movieReducer';

const configureStore = (railsProps) => (
  createStore(
    movieReducer,
    railsProps,
    applyMiddleware(thunk)
  )
);

export default configureStore;
