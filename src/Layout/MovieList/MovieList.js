import React, { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard.js";
import "../MovieList/MovieList.css"

function MovieList() {
  const API_KEY = "866cbccb21c2ad041a9e1916053994d5";
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;
  const [films, setFilms] = useState(null);

  async function getFilm() {
    try {
      const response = await axios.get(URL);
      setFilms(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  getFilm();

  if (films === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className ="films-grid">
        {films.map((film) => {
          return (
            <MovieCard
              title={film.title}
              imgUrl={film.poster_path}
              date={film.release_date}
              stars={film.vote_average}
              genre={film.genre_ids[0]}
            />
          );
        })}
      </div>
    );
  }
}

export default MovieList;
