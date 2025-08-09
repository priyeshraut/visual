import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";

const useDetailsPage = () => {
  const param = useParams();
  const [data, setData] = useState(null); // Change initial state to null
  const [playVideo, setPlayVideo] = useState(false);

  const getMoviesTVDetails = async () => {
    try {
      const [
        movieTvDetRes,
        movieTvCastRes,
        similarMovieTvRes,
        recommendedMovieTvRes,
      ] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/${param.media_type}/${param.id}?language=en-US`,
          API_OPTIONS
        ),
        fetch(
          `https://api.themoviedb.org/3/${param.media_type}/${param.id}/credits?language=en-US`,
          API_OPTIONS
        ),
        fetch(
          `https://api.themoviedb.org/3/${param.media_type}/${param.id}/similar?language=en-US&page=1`,
          API_OPTIONS
        ),
        fetch(
          `https://api.themoviedb.org/3/${param.media_type}/${param.id}/recommendations?language=en-US&page=1`,
          API_OPTIONS
        ),
      ]);

      const movieTvDetData = await movieTvDetRes.json();
      const movieTvCastData = await movieTvCastRes.json();
      const similarMovieTvData = await similarMovieTvRes.json();
      const recommendedMovieTvData = await recommendedMovieTvRes.json();

      // Store as an object instead of an array
      setData({
        details: movieTvDetData,
        cast: movieTvCastData,
        similar: similarMovieTvData,
        recomended: recommendedMovieTvData,
      });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMoviesTVDetails();
  }, [param.id]); 

  const duration = Number(data?.details?.runtime / 60)
    .toFixed(1)
    .split(".");

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };


  return {data, handlePlayVideo, duration, param, playVideo, setPlayVideo};
};

export default useDetailsPage;
