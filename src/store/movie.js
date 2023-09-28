import { Store } from "../core/coreFile";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: "영화 제목을 검색해주세요!",
});

export default store;

export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }
  try {
    const result = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
    );
    const { Search, totalResults, Response, Error } = await result.json();
    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
      store.state.pageMax = 1;
    }
  } catch (error) {
    console.log("SearchMovies error : ", error);
  } finally {
    store.state.loading = false;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`
    );
    store.state.movie = await res.json();
  } catch (error) {
    console.log("getMovieDetailError : ", error);
  }
};
