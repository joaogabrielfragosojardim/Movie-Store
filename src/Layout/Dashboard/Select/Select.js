import React from "react";
import "../Select/Select.css";
import { useFilms } from "../../../Context/films";

function Select() {
  const { films, setFilms } = useFilms();

  function changeFilm(c) {
    const selectValue = c.target.value;

    switch (selectValue) {
      case "popularidade":
        popularidade(films);
        break;

      case "ordemAlfabetica":
        ordemAlfabetica(films);
        break;

      case "precoCrescente":
        precoCrescente(films);
        break;

      case "precoDecrescente":
        precoDecrescente(films);
        break;

      default:
        popularidade(films);
    }
  }

  function popularidade() {
    let filmsFilter = films.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      } else {
        return true;
      }
    });
    setFilms(filmsFilter.slice());
  }

  function ordemAlfabetica(films) {
    let filmsFilter = films.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      } else {
        return true;
      }
    });
    setFilms(filmsFilter.slice());
  }

  function precoCrescente(films) {
    let filmsFilter = films.sort(function (a, b) {
      if (a.vote_average < b.vote_average) {
        return -1;
      } else {
        return true;
      }
    });

    setFilms(filmsFilter.slice());
  }

  function precoDecrescente(films) {
    let filmsFilter = films.sort(function (a, b) {
      if (a.vote_average > b.vote_average) {
        return -1;
      } else {
        return true;
      }
    });

    setFilms(filmsFilter.slice());
  }

  return (
    <div id="container-select">
      <select id="filter-films" onChange={changeFilm}>
        <option>Filtrar</option>
        <option value="ordemAlfabetica">Ordem Alfabetica</option>
        <option value="precoCrescente">Preço Crescente</option>
        <option value="precoDecrescente">Preço Decrescente</option>
        <option value="popularidade">Popularidade</option>
      </select>
    </div>
  );
}

export default Select;
