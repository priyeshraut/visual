import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constants';

const useSearch = () => {
   const [data, setData] = useState([]);
   const [searchInput, setSearchInput] = useState("");
   const [loading, setLoading] = useState(false);
   const [noResults, setNoResults] = useState(false);
   const movies = useSelector((store) => store.movies);
   const location = useLocation();
   const navigate = useNavigate();
   const searchQuery = new URLSearchParams(location.search).get("q");
 
   const getData = async () => {
     if (!searchQuery) return;
 
     setLoading(true); // start shimmer
     setNoResults(false); // hide "no result" message
 
     try {
       const [movieRes, tvRes] = await Promise.all([
         fetch(
           `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
           API_OPTIONS
         ),
         fetch(
           `https://api.themoviedb.org/3/search/tv?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
           API_OPTIONS
         ),
       ]);
 
       const movieJson = await movieRes.json();
       const tvJson = await tvRes.json();
 
       const combinedResults = [...movieJson.results, ...tvJson.results];
       setData(combinedResults);
 
       if (combinedResults.length === 0) {
         setNoResults(true);
       }
     } catch (error) {
       console.error("Error fetching data:", error);
       setData([]);
       setNoResults(true);
     } finally {
       setLoading(false); // stop shimmer
     }
   };
 
   const handleSearch = (e) => {
     const value = e.target.value;
     setSearchInput(value);
     navigate(`/search?q=${value}`);
   };
 
   const handleClick = () => {
     setSearchInput("");
     navigate(`/search?q=`);
   };
 
   useEffect(() => {
     setSearchInput(searchQuery || ""); // keep input in sync
 
     if (!searchQuery) {
       // show shimmer when input is cleared
       setLoading(true);
       setNoResults(false);
       setData([]);
 
       // simulate delay to show shimmer (optional)
       const timer = setTimeout(() => {
         setLoading(false);
       }, 500);
 
       return () => clearTimeout(timer);
     }
 
     getData();
   }, [searchQuery]);


   return {data, searchInput, loading, noResults, movies, searchQuery, handleSearch, handleClick};
}

export default useSearch