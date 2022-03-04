import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = "https://swapi.dev/api/films/";
  const invalidUrl = "https://swapi.dev/api/film/";

  async function getMoviesHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(invalidUrl);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
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
    } catch (error) {
      setError(error.message);
    }
  setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movieList.length > 0 && <MoviesList movies={movieList} />}
        {!isLoading && movieList.length === 0 && !error && <p>Found no movies</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
