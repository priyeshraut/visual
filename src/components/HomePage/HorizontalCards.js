import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import HomePageCards from "./HomePageCards";

const HorizontalCards = ({ title, movies = [] }) => {
  const HomePageCardRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [HomePageCardWidth, setHomePageCardWidth] = useState(0);

  useEffect(() => {
    if (
      HomePageCardRef.current &&
      HomePageCardRef.current.children.length > 0
    ) {
      const scrollW =
        HomePageCardRef.current.scrollWidth -
        HomePageCardRef.current.clientWidth;
      const HomePageCardW =
        HomePageCardRef.current.children[0]?.offsetWidth || 0;

      setScrollWidth(scrollW);
      setHomePageCardWidth(HomePageCardW);
    }
  }, [movies]);

  const slideLeft = useCallback(() => {
    if (HomePageCardRef.current) {
      HomePageCardRef.current.scrollLeft =
        HomePageCardRef.current.scrollLeft === 0
          ? scrollWidth
          : HomePageCardRef.current.scrollLeft - HomePageCardWidth;
    }
  }, [scrollWidth, HomePageCardWidth]);

  const slideRight = useCallback(() => {
    if (HomePageCardRef.current) {
      HomePageCardRef.current.scrollLeft =
        HomePageCardRef.current.scrollLeft >= scrollWidth
          ? 0
          : HomePageCardRef.current.scrollLeft + HomePageCardWidth;
    }
  }, [scrollWidth, HomePageCardWidth]);

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="pl-4 pb-4 sm:pl-8">
      <h1 className="text-white font-bold text-lg sm:text-xl md:text-2xl relative capitalize">
        {title}
      </h1>
      <div className="relative">
        <FontAwesomeIcon
          onClick={slideLeft}
          className="text-white text-2xl p-2 cursor-pointer absolute top-1/2 -translate-y-1/2 left-7 hidden md:block z-20"
          icon={faChevronLeft}
        />
        <div
          ref={HomePageCardRef}
          className="flex gap-3 overflow-x-auto scroll-smooth transition-all snap-mandatory snap-x no-scrollbar"
        >
          {movies.map((movie) => (
            <HomePageCards key={movie?.id} data={movie} />
          ))}
        </div>
        <FontAwesomeIcon
          onClick={slideRight}
          className="text-white text-2xl p-2 cursor-pointer absolute top-1/2 -translate-y-1/2 right-7 hidden md:block z-20"
          icon={faChevronRight}
        />
      </div>
    </div>
  );
};

export default HorizontalCards;
