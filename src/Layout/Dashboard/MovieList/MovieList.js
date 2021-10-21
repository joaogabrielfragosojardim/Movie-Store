import React from "react";
import MovieCard from "./MovieCard.js";
import "./MovieList.css";
import { useFilms } from "../../../Context/films";

function MovieList() {
  const { films } = useFilms();

  if (films) {
    return (
      <div className="films-grid">
        {films.map((film) => {
          return (
            <MovieCard
              title={film.title}
              imgUrl={film.poster_path}
              date={film.release_date}
              stars={film.vote_average}
              genre={film.genre_ids[0]}
              id={film.id}
              key={film.id}
            />
          );
        })}
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default MovieList;
