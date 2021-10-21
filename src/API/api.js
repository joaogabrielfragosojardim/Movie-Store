import axios from "axios";

const API_KEY = "866cbccb21c2ad041a9e1916053994d5";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;

const apiGet = axios.create({
  baseURL: URL,
});

let response = "";

const getFilms = async function getApi() {
  response = await apiGet.get("");
  return response.data.results;
};

let filmList = {
  getFilmList: async () => {
    return {
      films: await getFilms(),
    };
  },
};

export default filmList;
