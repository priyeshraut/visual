import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { baseUrl } from "../../utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoPlay from "../VideoPlay";
import moment from "moment";

const Banner = ({ trendingMovie }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const navigate = useNavigate();
  const { backdrop_path, title, overview, vote_average, release_date } =
    trendingMovie;

    
    const handleClick = () => {
      // If `media_type` is not provided, default to "movie"
      const type = trendingMovie.media_type
      ? trendingMovie.media_type
      : trendingMovie.name
      ? "tv"
      : "movie";
      navigate(`/${type}/${trendingMovie.id}`);
  };

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };
  
  if (!title) return;
  
  return (
    <>
      <div
        style={{ backgroundImage: `url(${baseUrl + backdrop_path})` }}
        className="relative top-0 h-[70vh] sm:h-screen flex flex-col items-start justify-center gap-7 p-4 sm:p-8 flex-shrink-0 w-full bg-cover bg-center bg-fixed"
      >
        <div className="absolute left-0 w-[100%] h-[100%] bg-gradient-to-r from-[#0F1014] to-transparent"></div>
        <div className="z-0">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold">
            {title}
          </h1>
          <br />
          <p className="text-white/85 text-sm sm:text-base w-full sm:w-[40%] text-ellipsis line-clamp-3">
            {overview}
          </p>
        </div>
        <div className="z-0">
          <p className="text-white/85 text-sm sm:text-base">
            Release Date : {moment(release_date).format("MMMM Do YYYY")} |
            Rating : {Number(vote_average).toFixed(1)}+
          </p>
        </div>
        <div className="z-0">
          <button
            onClick={handlePlayVideo}
            className="text-black bg-white text-lg sm:text-xl font-bold border border-solid border-white rounded-lg px-4 sm:px-8 py-1 sm:py-2 mr-1 sm:mr-2"
          >
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button
            onClick={handleClick}
            className="text-white bg-[#5855563b] text-lg sm:text-xl font-bold border border-none rounded px-4 sm:px-8 py-1 sm:py-2 ml-1 sm:ml-2"
          >
            <FontAwesomeIcon icon={faCircleInfo} /> More Info
          </button>
        </div>
      </div>
      {playVideo && (
        <VideoPlay
          media_type={
            trendingMovie.media_type
              ? trendingMovie.media_type
              : trendingMovie.name
              ? "tv"
              : "movie"
          }
          id={trendingMovie.id}
          close={() => setPlayVideo(false)}
        />
      )}
    </>
  );
};

export default Banner;
