import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addOnTheAirTvShows } from "../utils/moviesSlice";
import { useEffect } from "react";

const useOnTheAirTvShows = () => {
    const dispatch = useDispatch();
    const getOnTheAirTvShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        // console.log(json.results)
        dispatch(addOnTheAirTvShows(json.results));
    }
    
    useEffect(() => {
        getOnTheAirTvShows();
    }, []);

}

export default useOnTheAirTvShows;