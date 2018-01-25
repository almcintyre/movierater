import { combineReducers } from 'redux';

const data = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const movieReducer = combineReducers({ data });

export default movieReducer;
