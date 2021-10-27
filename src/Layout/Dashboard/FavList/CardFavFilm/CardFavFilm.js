import React from "react";
import "../CardFavFilm/CardFavFilm.css";

function CardFavFilm({ imgUrl, title, price }) {
  let formatedPrice = price * 3.5;
  return (
    <div className="card-fav">
      <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt={title}></img>
      <h3>{title}</h3>
      <h3>
        {formatedPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h3>
    </div>
  );
}

export default CardFavFilm;
