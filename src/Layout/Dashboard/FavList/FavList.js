import React from "react";
import { useFavFilms } from "../../../Context/favFilms";
import "../FavList/FavList.css";
import CardFavFilm from "../FavList/CardFavFilm/CardFavFilm";

function FavList() {
  const { favFilms, setFavFilms } = useFavFilms();

  function turnEmpty() {
    setFavFilms([]);
  }

  return (
    <div>
      <div id="header-fav-list">
        <h2>Meus Favoritos</h2>
        <button onClick={turnEmpty}>Esvaziar</button>
      </div>
      <div id="scroller-fav-list">
        {favFilms.map((favFilm) => {
          return (
            <CardFavFilm
              imgUrl={favFilm.poster_path}
              title={favFilm.title}
              price={favFilm.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FavList;
