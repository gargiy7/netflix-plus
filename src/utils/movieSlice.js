import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    currentMovieDetail: null,
    currentMovieSimilar: null,
    currentMovieRecommendation: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addCurrentMovieDetail: (state, action) => {
      state.currentMovieDetail = action.payload;
    },
    addCurrentMovieSimilar: (state, action) => {
      state.currentMovieSimilar = action.payload;
    },
    addCurrentMovieRecommendation: (state, action) => {
      state.currentMovieRecommendation = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addCurrentMovieDetail,
  addCurrentMovieSimilar,
  addCurrentMovieRecommendation,
} = movieSlice.actions;
export default movieSlice.reducer;
