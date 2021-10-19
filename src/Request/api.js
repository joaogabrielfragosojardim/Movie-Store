import axios from "axios";

const API_KEY = "866cbccb21c2ad041a9e1916053994d5";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;

const api = axios.create({
  baseURL: URL,
});

export default api;
