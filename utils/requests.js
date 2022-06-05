const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export default {
  fetchTrending: {
    title: "Trending",
    url: `${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  fetchDocumentaries: {
    title: "Documentaries",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  },
  fetchAnimationMovies: {
    title: "Animation",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  },
  fetchTV: {
    title: "TV",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`,
  },
  fetchWesternMovies: {
    title: "Western",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
  },
};
