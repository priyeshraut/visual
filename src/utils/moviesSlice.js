import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice( {
    name: "movies",
    initialState: {
        trending: null,
        trendingMovies: null,
        nowPlayingMovies: null,
        popular: null,
        topRated: null,
        upcomingMovies: null,
        onTheAirTvShows: null,
        movies: null,
        trailerVideo: null,
    },
    reducers: {
        addTrending: (state, action) => {
            state.trending= action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies= action.payload;
        },
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopular: (state, action) => {
            state.popular = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addOnTheAirTvShows: (state, action) => {
            state.onTheAirTvShows = action.payload;
        },
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const { addTrending, addTrendingMovies, addNowPlayingMovies, addPopular, addTopRated, addUpcomingMovies, addOnTheAirTvShows, addMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;