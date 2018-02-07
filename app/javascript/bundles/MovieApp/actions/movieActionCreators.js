/* eslint-disable import/prefer-default-export */
import ReduxThunk from 'redux-thunk';
import $ from 'jquery';

export const sortMoviesByTitle = (data) => ({
  type: 'SORT_BY_TITLE',
  data
});

export const sortMoviesByDate = (data) => ({
  type: 'SORT_BY_DATE',
  data
});

export const sortMoviesByGenre = (data) => ({
  type: 'SORT_BY_GENRE',
  data
});
