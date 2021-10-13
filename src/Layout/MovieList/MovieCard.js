import React from "react";
import "../MovieList/MovieCard.css";

function MovieCard(props) {
  const imgUrl = props.imgUrl;
  const date = props.date;
  const title = props.title;
  const stars = props.stars;
  const gender = props.gender;

  return (
    <div className="card">
      <div className="banner-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
          alt={title}
          className="movie-banner"
        ></img>
        <h3 className="date">{date}</h3>
      </div>
      <h2>{title}</h2>
      <div>
        <h3>{stars}</h3>
        <h3>{gender}</h3>
      </div>
      <h2>150,00</h2>
      <button className="card-button">Adicionar</button>
    </div>
  );
}

export default MovieCard;
