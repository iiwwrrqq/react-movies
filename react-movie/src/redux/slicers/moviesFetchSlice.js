import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  newMoviesData: [],
  movieFamilyData: [],
  selectedMovie: null,
  dramaMoviesData: [],
};

const moviesFetchSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    MOVIES_ASYNC(state, action) {
      state.data = action.payload;
    },
    NEW_MOVIES_ASYNC(state, action) {
      state.newMoviesData = action.payload;
    },
    MOVIE_FAMILY_ASYNC(state, action) {
      state.movieFamilyData = action.payload;
    },
    SELECT_MOVIE(state, action) {
      state.selectedMovie = action.payload;
    },
    DRAMA_MOVIES_ASYNC(state, action) {
      state.dramaMoviesData = action.payload;
    },
  },
});

export const {
  MOVIES_ASYNC,
  NEW_MOVIES_ASYNC,
  MOVIE_FAMILY_ASYNC,
  SELECT_MOVIE,
  DRAMA_MOVIES_ASYNC,
} = moviesFetchSlice.actions;
export default moviesFetchSlice.reducer;
