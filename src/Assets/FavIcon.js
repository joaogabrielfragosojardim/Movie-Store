import React from "react";

function FavIcon(props) {
  const width = props.width;

  function showFavCard(c) {
    const icon = c.target;
    const containerFilms = document.getElementById("container-select-movies");
    const containerFavList = document.getElementById("container-fav-list");


    if (icon.classList.contains("expanded")) {
      containerFilms.style.width = "100vw";
      containerFavList.style.display = "none";
      icon.classList.remove("expanded");
    } else {
      icon.classList.add("expanded");
      containerFilms.style.width = "calc(100vw - 450px)";
      containerFavList.style.display = "inline";
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ fill: "currentcolor", width: width, cursor: "pointer" }}
      onClick={showFavCard}
    >
      <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
    </svg>
  );
}

export default FavIcon;
