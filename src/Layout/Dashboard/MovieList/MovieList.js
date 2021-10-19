import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard.js";
import "./MovieList.css";
import useApi from "../../../Request/useApi.js";

function MovieList() {

  const films = useApi()[0]

  console.log(useApi())

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
    return <div>b</div>;
  }
}

export default MovieList;
