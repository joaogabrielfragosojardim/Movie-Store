import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = "866cbccb21c2ad041a9e1916053994d5";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;

const apiGet = axios.create({
  baseURL: URL,
});

function useApi() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      const response = await apiGet.get("");
      setFilms(response.data.results);
    }

    getFilms();
  }, []);
  return [films, setFilms];
}

export default useApi;
