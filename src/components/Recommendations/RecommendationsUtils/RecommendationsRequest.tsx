const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;
const requests = {
  fetchContinueWatching: `list/8254262?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc`,

  fetchOriginals: `list/8254263?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc`,

  fetchMarvelUniverse: `list/1?api_key=${API_KEY}&language=en-US`,

  fetchTrending: `list/49435?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc`,

  fetchNewToDisney: `list/7195?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc`,

  fetchPopular: `list/634?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc`,
};
export default requests;
