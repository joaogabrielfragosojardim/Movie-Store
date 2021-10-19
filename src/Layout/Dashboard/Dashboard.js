import React from "react";
import MovieList from "./MovieList/MovieList";
import FilmsProvider from "../../Request/films";

function Dashboard() {
  return (
    <FilmsProvider>
      <MovieList />
    </FilmsProvider>
  );
}

export default Dashboard;
