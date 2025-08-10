import { useState } from "react";
import { baseUrl } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import VideoPlay from "./VideoPlay";
import moment from "moment";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const [playVideo, setPlayVideo] = useState(false);

  const handleClick = () => {
    const type = data.media_type ? data.media_type : data.name ? "tv" : "movie";
    navigate(`/${type}/${data.id}`);
  };

  const handlePlayVideo = (e) => {
    setPlayVideo(true);
  };

  if (!data || !data?.poster_path) return null;

  return (
    <div className="relative group">
      <div
        onClick={handleClick}
        className="w-full cursor-pointer aspect-[2/3] transform transition duration-300 group-hover:scale-125 group-hover:z-20 relative"
      >
        <img
          className="w-full h-full object-cover rounded group-hover:brightness-50"
          src={baseUrl + data?.poster_path}
          alt="movieListImage"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 transform transition duration-700 group-hover:scale-125 group-hover:z-20 hidden group-hover:block">
        <div className="flex justify-between gap-2 items-start">
          <div>
            <h5 className="text-sm font-medium text-white line-clamp-1">
              {data?.title || data?.name || data?.origional_name}
            </h5>
            <p className="text-white/85 text-[.75rem]">
              {moment(data?.release_date).format("MMMM Do YYYY")}
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
          <p className="text-[.75rem] text-white/85 text-ellipsis line-clamp-3">
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

export default Card;
