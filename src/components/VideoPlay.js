import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoPlay = ({ media_type, id, close }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const loading = useTrailerVideo(media_type, id);

  return (
    <section className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-neutral-700 bg-opacity-50 flex justify-center items-center">
      <div className="bg-black w-[90vw] sm:w-[95vw] h-[80vh] max-w-screen-lg aspect-video rounded relative">
        <button onClick={close}>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-white text-2xl absolute -top-6 right-0 cursor-pointer"
          />
        </button>

        {loading ? (
          <p className="text-white text-md flex justify-center items-center h-full">
            Loading trailer...
          </p>
        ) : !trailerVideo?.key ? (
          <div className="text-white text-xl flex justify-center items-center h-full">
            No trailer available
          </div>
        ) : (
          <iframe
            className="w-full h-full absolute top-0 aspect-video"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default VideoPlay;
