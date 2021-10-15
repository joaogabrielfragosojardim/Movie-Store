import React, { useState, useEffect } from "react";
import useSWR from "swr";
import MovieCard from "./MovieCard.js";
import "./MovieList.css";

function MovieList() {
  const API_KEY = "866cbccb21c2ad041a9e1916053994d5";
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(URL, fetcher);

  if (error) return "An error has occurred.";
  if (!data) return <></>;

  return (
    <div className="films-grid">
      {data.results.map((film) => {
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
}

export default MovieList;
