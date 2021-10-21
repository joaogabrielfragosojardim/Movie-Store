import React from "react";
import { useFilms } from "../Context/films";

function FavIcon(props) {
  const { films } = useFilms();

  const id = props.id;

  function addToFav(c) {
    let icon = document.getElementById(id);

    if (icon.classList.contains("fav-icon-cards")) {
      icon.classList.add("fav-icon-cards-active");
      icon.classList.remove("fav-icon-cards");
      films.map((film)=>{
        if(film.id === parseInt(c.target.id)){
         
        }
         return console.log(films);
      })
    } else {
      icon.classList.add("fav-icon-cards");
      icon.classList.remove("fav-icon-cards-active");
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
