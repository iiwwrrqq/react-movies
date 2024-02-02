import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  MOVIES_ASYNC,
  NEW_MOVIES_ASYNC,
  MOVIE_FAMILY_ASYNC,
  SELECT_MOVIE,
  DRAMA_MOVIES_ASYNC,
} from "../slicers/moviesFetchSlice";
import axios from "axios";
import apiConfig from "../../api/apiConfig";

export const GET_MOVIES_ASYNC = createAsyncThunk(
  "movies/GET_MOVIES_ASYNC",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(
        `${apiConfig.baseUrl}discover/movie?api_key=${apiConfig.apiKey}`
      );
      const newMovies = res.data.results;

      if (newMovies.length > 0) {
        dispatch(SELECT_MOVIE(newMovies[0]));
      }

      dispatch(MOVIES_ASYNC(newMovies));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const GET_NEW_MOVIES_ASYNC = createAsyncThunk(
  "movies/GET_NEW_MOVIES_ASYNC",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(
        `${apiConfig.baseUrl}discover/movie?api_key=${apiConfig.apiKey}&page=2`
      );
      const newMovies = res.data.results;

      if (newMovies.length > 0) {
        dispatch(SELECT_MOVIE(newMovies[0]));
      }

      dispatch(NEW_MOVIES_ASYNC(newMovies));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const GET_FAMILY_MOVIES_ASYNC = createAsyncThunk(
  "movies/GET_FAMILY_MOVIES_ASYNC",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(
        `${apiConfig.baseUrl}discover/movie?api_key=${apiConfig.apiKey}&page=4`
      );
      const newMovies = res.data.results;

      if (newMovies.length > 0) {
        dispatch(SELECT_MOVIE(newMovies[0]));
      }

      dispatch(MOVIE_FAMILY_ASYNC(newMovies));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const GET_DRAMA_MOVIES_ASYNC = createAsyncThunk(
  "movies/GET_DRAMA_MOVIES_ASYNC",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(
        `${apiConfig.baseUrl}discover/movie?api_key=${apiConfig.apiKey}&page=5`
      );
      const newMovies = res.data.results;

      if (newMovies.length > 0) {
        dispatch(SELECT_MOVIE(newMovies[0]));
      }

      dispatch(DRAMA_MOVIES_ASYNC(newMovies));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
