import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovies = () => {
    const dispatch = useDispatch();
    const getMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS)
        const json = await data.json();
        dispatch(addMovies(json.results));
    }

    useEffect(() => {
        getMovies();
    }, [])
}

export default useMovies;