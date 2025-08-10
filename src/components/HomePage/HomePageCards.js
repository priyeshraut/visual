import { useState } from "react";
import { baseUrl } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import VideoPlay from "../VideoPlay";
import moment from "moment";

const HomePageCards = ({ data }) => {
  const navigate = useNavigate();
  const [playVideo, setPlayVideo] = useState(false);

  const handleClick = () => {
    // If `media_type` is not provided, default to "movie"
    const type = data.media_type ? data.media_type : data.name ? "tv" : "movie";
    navigate(`/${type}/${data.id}`);
  };

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  if (!data.poster_path) return;

  return (
    <div className="relative group">
      <div
        onClick={handleClick}
        className="flex-grow flex-shrink-0 basis-full snap-start w-28 sm:w-44 md:w-48 mt-4 cursor-pointer group-hover:rounded  relative"
      >
        <img
          className="w-full h-full object-cover rounded md:group-hover:brightness-50"
          src={baseUrl + data?.poster_path}
          alt="movieListImage"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 hidden md:group-hover:block">
        <div className="flex justify-between gap-2 items-start">
          <div>
            <h5 className="text-sm font-medium text-white line-clamp-1">
              {data?.title || data?.name || data?.origional_name}
            </h5>
            <p className="text-white/85 text-xs font-medium">{moment(data?.release_date).format("MMMM Do YYYY")}
            </p>
          </div>
          <h5 className="text-sm font-medium text-white/85">
            {Number(data?.vote_average).toFixed(1)}+
          </h5>
        </div>
        <div className="w-full text-center">
          <button
            onClick={handlePlayVideo}
            className="text-black bg-white text-sm font-bold border border-solid border-white rounded-lg py-1 sm:py-2 my-2 w-full"
          >
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
        </div>
        <div>
          <p className="text-sm text-white/85 text-opacity-95 text-ellipsis line-clamp-3">
            {data?.overview}
          </p>
        </div>
      </div>
      {playVideo && (
        <VideoPlay
          media_type={
            data.media_type ? data.media_type : data.name ? "tv" : "movie"
          }
          id={data.id}
          close={() => setPlayVideo(false)}
        />
      )}
    </div>
  );
};

export default HomePageCards;
