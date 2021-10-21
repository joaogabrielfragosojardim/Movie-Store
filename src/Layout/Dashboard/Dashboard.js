import React from "react";
import MovieList from "./MovieList/MovieList";
import Select from "./Select/Select";
import FavList from "./FavList/FavList";

function Dashboard() {
  return (
    <div>
      <div>
        <FavList />
      </div>
      <div>
        <Select />
        <MovieList />
      </div>
    </div>
  );
}

export default Dashboard;
