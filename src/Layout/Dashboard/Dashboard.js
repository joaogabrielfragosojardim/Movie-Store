import React from "react";
import MovieList from "./MovieList/MovieList";
import Select from "./Select/Select";
let a = 0
function Dashboard() {
  return (
    <>
      <Select />
      <MovieList />
    </>
  );
}

export default Dashboard;
