import React from "react";
import "./MovieCard.css";
import StarIcon from "../../../Assets/StarIcon";
import FavIconCards from "../../../Assets/FavIconCards";

function MovieCard({ imgUrl, date, title, stars, genre, id }) {
  let price = stars * 3.5;
  price = price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  let formatedDate = date.split("-");
  let formatedGenre = genre;

  //Formatando Data

  switch (formatedDate[1]) {
    case "01":
      formatedDate[1] = "Janeiro";
      break;
    case "02":
      formatedDate[1] = "Fevereiro";
      break;
    case "03":
      formatedDate[1] = "Março";
      break;
    case "04":
      formatedDate[1] = "Abril";
      break;
    case "05":
      formatedDate[1] = "Maio";
      break;
    case "06":
      formatedDate[1] = "Junho";
      break;
    case "07":
      formatedDate[1] = "Julho";
      break;
    case "08":
      formatedDate[1] = "Agosto";
      break;
    case "09":
      formatedDate[1] = "Setembro";
      break;
    case "10":
      formatedDate[1] = "Outubro";
      break;
    case "11":
      formatedDate[1] = "Novembro";
      break;
    case "12":
      formatedDate[1] = "Dezembro";
      break;
    default:
      formatedGenre[1] = "Error";
  }

  //Formatando Genero

  switch (genre) {
    case 12:
      formatedGenre = "Aventura";
      break;
    case 14:
      formatedGenre = "Fantasia";
      break;
    case 16:
      formatedGenre = "Animação";
      break;
    case 18:
      formatedGenre = "Drama";
      break;
    case 27:
      formatedGenre = "Horror";
      break;
    case 28:
      formatedGenre = "Ação";
      break;
    case 35:
      formatedGenre = "Comédia";
      break;
    case 36:
      formatedGenre = "História";
      break;
    case 37:
      formatedGenre = "Ocidental";
      break;
    case 53:
      formatedGenre = "Terror";
      break;
    case 80:
      formatedGenre = "Criminal";
      break;
    case 99:
      formatedGenre = "Documentário";
      break;
    case 878:
      formatedGenre = "Ficção Cientifica";
      break;
    case 9648:
      formatedGenre = "Mistério";
      break;
    case 10402:
      formatedGenre = "Musica";
      break;
    case 10749:
      formatedGenre = "Romance";
      break;
    case 10751:
      formatedGenre = "Familia";
      break;
    case 10752:
      formatedGenre = "Guerra";
      break;
    case 10770:
      formatedGenre = "Filme de TV";
      break;
    default:
      formatedGenre = "Error";
  }

  return (
    <div className="card" key={id}>
      <div className="banner-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
          alt={title}
          className="movie-banner"
        ></img>
        <FavIconCards id={id} />
        <h3 className="date">{`${formatedDate[2]} de ${formatedDate[1]}, ${formatedDate[0]}`}</h3>
      </div>
      <div className="container-infos">
        <h2 className="title-film">{title}</h2>
        <div className="container-stars-and-genre">
          <div className="stars-and-rate">
            <StarIcon />
            <h3>{stars}</h3>
          </div>
          <h3>{formatedGenre}</h3>
        </div>
        <h2 className="price">{price}</h2>
      </div>

      <button className="card-button">Adicionar</button>
    </div>
  );
}

export default MovieCard;
