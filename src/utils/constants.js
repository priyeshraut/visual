import {
  faFilm,
  faHouse,
  faMagnifyingGlass,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2RiMzI1NjRlZTNhNWNhNjVlNGVhNzVkYjIzZDc4ZCIsIm5iZiI6MTY5NTk1MjU2MS4xODQsInN1YiI6IjY1MTYyZWIxOTNiZDY5MDBmZTQ3ZGFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NDAKBYcUoOZ-uUs1aovl_plyl3XgurJzfjRyT1cED70",
  },
};

export const baseUrl = "https://www.themoviedb.org/t/p/original/";

export const navigation = [
  {
    label: "Movies",
    href: "movies",
    icon: <FontAwesomeIcon icon={faFilm} />,
  },
  {
    label: "TV Shows",
    href: "tvshows",
    icon: <FontAwesomeIcon icon={faTv} />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  ...navigation,
  {
    label: "Search",
    href: "/search",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
];

export const movieCardsCont = Array.from({ length: 6 }).map((_, sectionIdx) => {
  const movieCards = Array.from({ length: 10 }).map((_, cardIdx) => (
    <div
      key={`${sectionIdx}-${cardIdx}`}
      className="flex-shrink-0 bg-gray-700 h-32 sm:h-64 w-28 sm:w-44 md:w-48 mt-4 animate-pulse"
    ></div>
  ));

  return (
    <div key={sectionIdx} className="flex gap-3 overflow-hidden">
      {movieCards}
    </div>
  );
});

export const profilePic = Array.from({ length: 50 }).map((_, idx) => {
  return <div key={idx} className="h-24 w-24 bg-gray-700 rounded-full"></div>;
});

export const DetailSimmerCardsCont = Array.from({ length: 2 }).map(
  (_, contIdx) => {
    const movieCards = Array.from({ length: 10 }).map((_, idx) => (
      <div
        key={`${contIdx}-${idx}`}
        className="flex-shrink-0 bg-gray-700 h-32 sm:h-64 w-28 sm:w-44 md:w-48 mt-4 cursor-pointer animate-pulse"
      ></div>
    ));

    return (
      <div key={contIdx} className="flex gap-3 overflow-hidden">
        {movieCards}
      </div>
    );
  }
);

export const Cards = Array.from({ length: 50 }).map((_, idx) => (
  <div
    key={idx}
    className="w-full aspect-[2/3] bg-gray-700 rounded animate-pulse"
  ></div>
));
