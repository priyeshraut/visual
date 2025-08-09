import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrending } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTrending = () => {
  const dispatch = useDispatch();
  const getTrendingData = async () => {
    try {
      const [movieRes, tvRes] = await Promise.all([
        fetch(
          "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
          API_OPTIONS
        ),
        fetch(
          "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
          API_OPTIONS
        ),
      ]);

      const movieJson = await movieRes.json();
      const tvJson = await tvRes.json();

      dispatch(addTrending([...movieJson.results, ...tvJson.results]));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTrendingData();
  }, []);
};

export default useTrending;
