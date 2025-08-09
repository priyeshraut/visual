// useTrailerVideo.js
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (media_type, id) => {
  const dispatch = useDispatch();

  const getTrailerVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterTrailerData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterTrailerData.length ? filterTrailerData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    if (media_type && id) getTrailerVideo();
  }, [media_type, id]);
};

export default useTrailerVideo;
