import React from "react";
import { useFavFilms } from "../Context/favFilms";
import { useFilms } from "../Context/films";

function FavIcon({ id, fav }) {
  const { films } = useFilms();
  const { favFilms, setFavFilms } = useFavFilms();

  function addToFav(c) {
    let icon = document.getElementById(id);

    if (icon.classList.contains("fav-icon-cards-active")) {
      films.forEach((film) => {
        if (film.id === parseInt(icon.id)) {
          film.fav = false;

          if (film.fav === false) {
            icon.classList.remove("fav-icon-cards-active");
            icon.classList.add("fav-icon-cards");
          }
        }
      });
    } else {
      films.forEach((film) => {
        if (film.id === parseInt(icon.id)) {
          setFavFilms(favFilms.concat(film));
          film.fav = true;

          if (film.fav === true) {
            icon.classList.add("fav-icon-cards-active");
            icon.classList.remove("fav-icon-cards");
          }
        }
      });
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="fav-icon-cards"
      onClick={addToFav}
      id={id}
    >
      <path
        id={id}
        d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"
      />
    </svg>
  );
}

export default FavIcon;
