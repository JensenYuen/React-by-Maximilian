import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie'
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = "https://swapi.dev/api/films/";
  const invalidUrl = "https://swapi.dev/api/film/";
  const database = "firebase database link here";
  async function addMovieHandler(movie) {
    const response = await fetch(database, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  const getMoviesHandler = useCallback(async() => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(database);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const loadedMoives = [];
      for (const key in data) {
        loadedMoives.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      setMovieList(loadedMoives);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    getMoviesHandler();
  },[getMoviesHandler]);

  let content = <p>Found no movies</p>;
  if (movieList.length > 0) {
    content = <MoviesList movies={movieList} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movieList.length > 0 && content}
        {!isLoading && movieList.length === 0 && !error && content }
        {isLoading && content }
        {!isLoading && error && content }
      </section>
    </React.Fragment>
  );
}

export default App;
