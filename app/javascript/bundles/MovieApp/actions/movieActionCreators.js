/* eslint-disable import/prefer-default-export */

export const sortMoviesByTitle = (data) => ({
  type: 'SORT_BY_TITLE',
  data
});

export const sortMoviesByDate = (data) => ({
  type: 'SORT_BY_DATE',
  data
});
