import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect, useState } from "react";

const useTrailerVideo = (media_type, id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getTrailerVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      // Get only YouTube trailers
      const filterTrailerData = json.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      const trailer = filterTrailerData.length
        ? filterTrailerData[0]
        : json.results.find((video) => video.site === "YouTube") || null;

      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (media_type && id) {
      setLoading(true);
      getTrailerVideo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [media_type, id]);

  return loading;
};

export default useTrailerVideo;
