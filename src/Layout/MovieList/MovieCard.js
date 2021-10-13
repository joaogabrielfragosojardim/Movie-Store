import React from "react";

function MovieCard(props) {
  const imgUrl = props.imgUrl;
  const date = props.date;
  const title = props.title;
  const stars = props.stars;
  const gender = props.gender;

  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt={title}></img>
        <h3>{date}</h3>
      </div>
      <h2>{title}</h2>
      <div>
        <h3>{stars}</h3>
        <h3>{gender}</h3>
      </div>
      <h2>150,00</h2>
      <button>Adicionar</button>
    </div>
  );
}

export default MovieCard;
