import React from "react";
import MovieList from "./MovieList/MovieList";
import Select from "./Select/Select";
import FavList from "./FavList/FavList";
import "../Dashboard/Dashboard.css";

function Dashboard() {
  return (
    <div id="container-dashboard">
      <div id="container-select-movies" className="container-animation">
        <Select />
        <MovieList />
      </div>
      <div id="container-fav-list" className="container-animation">
        <FavList />
      </div>
    </div>
  );
}

export default Dashboard;
