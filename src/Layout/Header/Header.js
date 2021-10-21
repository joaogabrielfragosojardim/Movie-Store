import React, { useEffect, useState } from "react";
import { useFilms } from "../../Context/films";
import CartIcon from "../../Assets/CartIcon";
import FavIcon from "../../Assets/FavIcon";
import Search from "../../Assets/Search";
import "../Header/Header.css";
import api from "../../API/api";

function Header() {
  const { setFilms } = useFilms();
  const [filmList, setFilmsList] = useState([]);
  let filteredFilms = [];

  useEffect(() => {
    const loadedFilms = async () => {
      let awaitFilmList = await api.getFilmList();

      if (awaitFilmList) {
        awaitFilmList = awaitFilmList.films;
        setFilmsList(awaitFilmList);
        setFilms(awaitFilmList);
      }
    };
    loadedFilms();
  }, [setFilmsList, setFilms]);

  function pesquisar(d) {
    const keys = d.target.value.toLowerCase();
    filteredFilms = filmList.filter((film) =>
      film.title.toLowerCase().startsWith(keys)
    );
    setFilms(filteredFilms);
  }

  const width = "45px";
  return (
    <>
      <div className="header">
        <div className="logo">LOGO</div>
        <div className="search-results">
          <input type="text" placeholder="Pesquisa" onKeyUp={pesquisar}></input>
          <Search />
        </div>
        <div className="fav-and-cart">
          <FavIcon width={width} />
          <CartIcon width={width} />
        </div>
      </div>
      <div className="header-mobile">
        <div className="logo-and-fav-cart">
          <div className="logo">LOGO</div>
          <div className="fav-and-cart">
            <FavIcon width={width} />
            <CartIcon width={width} />
          </div>
        </div>
        <div className="search-results">
          <input type="text" placeholder="Pesquisa"></input>
          <Search />
        </div>
      </div>
    </>
  );
}

export default Header;
