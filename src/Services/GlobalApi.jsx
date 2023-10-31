import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/";
const apiKey = "f70446f462901291143df460dfa9920e";

const trendingMovies = axios.get(
  movieBaseUrl + "trending/all/day?api_key=" + apiKey
);

export default { trendingMovies };
