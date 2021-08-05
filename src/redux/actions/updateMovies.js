import { UPDATE_MOVIES } from '../types';

export const updateMovies = (movie) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_MOVIES,
      payload: movie,
    });
  } catch (error) {
    console.log(error);
  }
};
