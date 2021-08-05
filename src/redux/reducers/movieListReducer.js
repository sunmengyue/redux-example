import { UPDATE_MOVIES } from '../types';

export const movieListReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_MOVIES:
      return [...state, { name: action.payload }];
    default:
      return state;
  }
};
