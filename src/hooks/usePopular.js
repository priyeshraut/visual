import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopular } from "../utils/moviesSlice";

const usePopular = () => {
  const dispatch = useDispatch();
  const getPopularData = async () => {
    try {
      const [movieRes, tvRes] = await Promise.all([
        fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          API_OPTIONS
        ),
        fetch(
          "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
          API_OPTIONS
        ),
      ]);

      const movieJson = await movieRes.json();
      const tvJson = await tvRes.json();

      dispatch(addPopular([...movieJson.results, ...tvJson.results]));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPopularData();
  }, []);
};

export default usePopular;
