import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          title: movie.title,
          id: movie.episode_id,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && (
          <h1>No movies to show</h1>
        )}
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && error && <h1>{error}</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
