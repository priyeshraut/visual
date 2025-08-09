import Banner from "./HomePage/Banner";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useOnTheAirTvShows from "../hooks/useOnTheAirTvShows";
import HomePageSimmer from "./HomePage/HomePageSimmer";
import useTrending from "../hooks/useTrending";
import useTrendingMovies from "../hooks/useTrendingMovies";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useHome from "../hooks/useHome";
import HorizontalCards from "./HomePage/HorizontalCards";

const Home = () => {
  useTrending();
  useTrendingMovies();
  useNowPlayingMovies();
  useOnTheAirTvShows();
  useTopRated();
  usePopular();
  // usePopular2();
  useUpcomingMovies();
  const { movies, carouselRef } = useHome();

  return (
    <main>
      {!movies?.trendingMovies?.length ? (
        <HomePageSimmer />
      ) : (
        <>
          {/* Auto-sliding Banner */}
          <section className="relative flex w-full mx-auto overflow-hidden">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto scroll-smooth no-scrollbar transition-all"
            >
              {movies?.trendingMovies.map((trendingMovie) => (
                <Banner key={trendingMovie.id} trendingMovie={trendingMovie} />
              ))}
            </div>
          </section>

          {/* HorizontalCards */}
           <section className="pb-8 -mt-16 relative">
            <div className="absolute -top-12 w-full h-28 bg-gradient-to-t from-[#0F1014] to-transparent"></div>
            <HorizontalCards title="Trending" movies={movies?.trending} />
            <HorizontalCards title="Now Playing" movies={movies?.nowPlayingMovies} />
            <HorizontalCards title="On The Air" movies={movies?.onTheAirTvShows} />
            <HorizontalCards title="Top Rated" movies={movies?.topRated} />
            <HorizontalCards title="Popular" movies={movies?.popular} />
            <HorizontalCards title="Upcoming" movies={movies?.upcomingMovies} />
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
