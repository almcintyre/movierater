import { createStore } from 'redux';
import movieReducer from '../reducers/movieReducer';

const configureStore = (railsProps) => (
  createStore(movieReducer, railsProps)
);

export default configureStore;
