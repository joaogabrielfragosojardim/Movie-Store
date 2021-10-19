import React, { useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard.js";
import "./MovieList.css";
import { useFilms } from "../../../Request/films";

const API_KEY = "866cbccb21c2ad041a9e1916053994d5";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;

const apiGet = axios.create({
  baseURL: URL,
});

let response = "";

function MovieList() {
  const { films, setFilms } = useFilms();

  useEffect(() => {
    async function getFilms() {
      response = await apiGet.get("");
      setFilms(response.data.results);
    }
    getFilms();
  }, [setFilms]);

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
