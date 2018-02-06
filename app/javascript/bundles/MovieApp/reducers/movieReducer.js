import { combineReducers } from 'redux';

const data = (state = '', action) => {
  switch (action.type) {
    case 'SORT_BY_TITLE':
      var sortedMovies = state.slice().sort(function(a,b) {
                          if ( a.title < b.title )
                            return -1;
                          if ( a.title > b.title )
                            return 1;
                          return 0;
                         });
      return sortedMovies;
    case 'SORT_BY_DATE':
      var sortedMovies = state.slice().sort(function(a,b) {
                          if ( a.release_date < b.release_date )
                            return 1;
                          if ( a.release_date > b.release_date )
                            return -1;
                          return 0;
                         });
      return sortedMovies;
    case 'SORT_BY_GENRE':
      var sortedMovies = state.slice().sort(function(a,b) {
                          if ( a.genre < b.genre )
                            return -1;
                          if ( a.genre > b.genre )
                            return 1;
                          return 0;
                         });
      return sortedMovies;             
    default:
      return state;
  }
};

const movieReducer = combineReducers({ data });

export default movieReducer;
