import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard.js";
import "./MovieList.css";
import api from "../../../Request/api.js";

function MovieList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      const response = await api.get("");
      setFilms(response.data.results);
    }

    getFilms();
  }, []);

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
