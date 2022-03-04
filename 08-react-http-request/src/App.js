import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const url = "https://swapi.dev/api/films/";

  async function getMoviesHandler() {
    const response = await fetch(url);
    const data = await response.json();
    const modifiedMoviesDetails = data.results.map((movie) => {
      return (
        {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        })
      });
    setMovieList(modifiedMoviesDetails)
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movieList} />
      </section>
    </React.Fragment>
  );
}

export default App;
