import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRated } from '../utils/moviesSlice';

const useTopRated = () => {
   const dispatch = useDispatch();
  const getTopRatedData = async () => {
    try {
      const [movieRes, tvRes] = await Promise.all([
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS),
        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS)
      ]);

      const movieJson = await movieRes.json();
      const tvJson = await tvRes.json();

      dispatch(addTopRated([...movieJson.results, ...tvJson.results]));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTopRatedData();
  }, []);
}

export default useTopRated