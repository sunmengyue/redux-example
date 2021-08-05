import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { movieListReducer } from './reducers/movieListReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({ movies: movieListReducer });
const initialState = {
  movies: [
    {
      name: 'The Proposal',
    },
  ],
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware)),
);

export default store;
