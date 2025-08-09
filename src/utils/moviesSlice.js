import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice( {
    name: "movies",
    initialState: {
        trending: null,
        trendingMovies: null,
        nowPlayingMovies: null,
        popular: null,
        popularMovies: null,
        topRated: null,
        topRatedMovies: null,
        topRatedTvShows: null,
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
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addOnTheAirTvShows: (state, action) => {
            state.onTheAirTvShows = action.payload;
        },
        addTopRatedTvShows: (state, action) => {
            state.topRatedTvShows = action.payload;
        },
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const { addTrending, addTrendingMovies, addNowPlayingMovies, addPopular, addPopularMovies, addTopRated, addTopRatedMovies, addUpcomingMovies, addOnTheAirTvShows, addTopRatedTvShows, addMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;