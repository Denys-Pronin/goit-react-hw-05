import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzkwMzYyZDY3NGQ1OTFlZmQxNGViZDRjNThhODUwYSIsIm5iZiI6MTcyMTMxNDc3Ny4wNTAzMDYsInN1YiI6IjY2OTkyYzU5NzA2Y2Q3MmM5NTJjN2E5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5d20foRo5LwKpECsBBPppG8bVtLQXkBXVDaaF2suxws";

const getTrendingMovies = async () => {
  const responce = await axios.get("trending/movie/day", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return responce.data.results;
};

const getFilerMovies = async (query) => {
  const responce = await axios.get(`search/movie?query=${query}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return responce.data.results;
};

const getMovieById = async (moviesId) => {
  const responce = await axios.get(`movie/${moviesId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return responce.data;
};

const getMovieVideos = async (id) => {
  const response = await axios.get(`/movie/${id}/videos`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

const getMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.cast;
};

const getMovieReview = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

export {
  getTrendingMovies,
  getFilerMovies,
  getMovieById,
  getMovieVideos,
  getMovieCast,
  getMovieReview,
};
