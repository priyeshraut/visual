import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SearchSimmer from "./SearchSimmer";
import useTrending from "../hooks/useTrending";
import useSearch from "../hooks/useSearch";

const Search = () => {
  useTrending();
  const {
    data,
    searchInput,
    loading,
    noResults,
    movies,
    handleSearch,
    handleClick,
  } = useSearch();

  return (
    <div className="py-20 px-4 sm:px-8">
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="relative">
          <input
            className="bg-transparent text-white text-lg cursor-pointer border border-white rounded-full px-4 py-2 w-full flex-shrink-0"
            type="text"
            placeholder="Search here..."
            onChange={handleSearch}
            value={searchInput}
          />
          {searchInput && (
            <FontAwesomeIcon
              onClick={handleClick}
              icon={faXmark}
              className="text-white text-2xl absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            />
          )}
        </form>

        <div>
          <h3 className="capitalize text-white text-xl sm:text-2xl md:text-3xl font-semibold my-5">
            {searchInput ? "Search Results" : "Trending"}
          </h3>

          {/* Loading Shimmer */}
          {loading ? (
            <SearchSimmer />
          ) : searchInput ? (
            noResults ? (
              <div className="text-center">
                <p className="text-white text-xl">
                  No result found for "{searchInput}"
                </p>
                <p className="text-[#8F98B2] text-md">
                  Try searching for something else or try with a different
                  spelling
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {data.map((searchData) => (
                  <Card key={searchData.id} data={searchData} />
                ))}
              </div>
            )
          ) : (
            // Trending movies
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {movies?.trending?.map((trendingData) => (
                <Card key={trendingData.id} data={trendingData} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
