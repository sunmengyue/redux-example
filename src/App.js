import './App.css';
import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateMovies } from './redux/actions/updateMovies';

function App(props) {
  console.log(props);
  const [movieName, setMovieName] = useState(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateMovieHandler = () => {
    dispatch(updateMovies(movieName));
  };
  return (
    <div className="App">
      <h2>Movie List</h2>
      <input type="text" onChange={(e) => setMovieName(e.target.value)} />
      <div>
        {state.movies.map((movie, index) => (
          <p key={index}>{movie.name}</p>
        ))}
      </div>
      <button onClick={updateMovieHandler}>add movie</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     movies: state.movies,
//   };
// };

// const dispatchToProps = (dispatch) => {
//   return {
//     updateMovies: () => dispatch(updateMovies),
//   };
// };

//export default connect(mapStateToProps, dispatchToProps)(App);
export default App;
