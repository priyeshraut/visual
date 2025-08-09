import React from "react";

const SearchSimmer = () => {
  const Cards = Array.from({ length: 50 }).map((_, idx) => (
    <div
      key={idx}
      className="w-full aspect-[2/3] bg-gray-700 rounded animate-pulse"
    ></div>
  ));
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
      {Cards}
    </div>
  );
};

export default SearchSimmer;
