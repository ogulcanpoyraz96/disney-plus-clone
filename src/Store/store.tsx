import { configureStore } from "@reduxjs/toolkit";
import showcaseReducer from "./showcase/showcaseSlice";
import movieReducer from "./movies/movieReducer";

const store = configureStore({
  reducer: {
    showCase: showcaseReducer,
    movies: movieReducer,
  },
});

export default store;
