import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const useHome = () => {
  const movies = useSelector((store) => store.movies);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (movies?.trendingMovies?.length) {
        setIndex((prevIndex) =>
          prevIndex === movies.trendingMovies.length - 1 ? 0 : prevIndex + 1
        );

        if (carouselRef.current) {
          const scrollAmount = carouselRef.current.clientWidth;
          carouselRef.current.scrollTo({
            left: (index + 1) * scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [movies, index]);

  return {movies, carouselRef};
};

export default useHome;
