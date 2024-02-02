import { configureStore } from "@reduxjs/toolkit";
import moviesFetchSlice from "./slicers/moviesFetchSlice";

export const store = configureStore({
  reducer: {
    movies: moviesFetchSlice,
  },
});
