import { baseUrl } from "../utils/constants";
import moment from "moment/moment";
import Divider from "./Divider";
import DetailsPageSimmer from "./DetailsPageSimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import VideoPlay from "./VideoPlay";
import HorizontalCards from "./HomePage/HorizontalCards";
import useDetailsPage from "../hooks/useDetailsPage";

const DetailsPage = () => {
  const { data, handlePlayVideo, duration, param, playVideo, setPlayVideo } =
    useDetailsPage();

  if (!data) return <DetailsPageSimmer />;

  return (
    <>
      <section>
        <div className="w-full h-full relative hidden sm:block">
          <div className="w-full h-[18.75rem]">
            <img
              src={baseUrl + data?.details?.backdrop_path}
              alt="movieListImage"
              className="h-full w-full object-cover brightness-50"
            />
          </div>
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[#0F1014] to-transparent"></div>
        </div>

        <div className="container mx-auto p-4 sm:p-8 py-20 sm:py-2 flex flex-col sm:flex-row gap-5 sm:gap-10">
          <div className="flex-shrink-0 sm:-mt-28 relative mx-auto sm:mx-0 w-fit">
            <div>
              <img
                src={baseUrl + data?.details?.poster_path}
                alt="movieListImage"
                className="h-80 w-60 object-contain rounded"
              />
            </div>
            <div className="w-full text-center">
              <button
                onClick={handlePlayVideo}
                className="text-black bg-white text-lg sm:text-xl font-bold border border-solid border-white rounded-lg  py-1 sm:py-2 my-5 w-56"
              >
                <FontAwesomeIcon icon={faPlay} /> Play
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {data?.details?.title ||
                  data?.details?.original_name ||
                  data?.details?.name}
              </h2>
              <p className="text-neutral-400">{data?.details?.tagline}</p>
            </div>

            <Divider />

            <div className="flex items-center my-1 text-sm sm:text- gap-1 text-white">
              <p>Rating : {Number(data?.details?.vote_average).toFixed(1)}+</p>
              <span>|</span>
              <p>View : {Number(data?.details?.vote_count)}</p>
              <span>|</span>
              {(
                <p>
                  Duration : {duration[0]}h {duration[1]}m
                </p>
              ) || "Unkown"}
            </div>

            <Divider />

            <div>
              <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
              <p className="text-white">{data?.details?.overview}</p>
            </div>

            <Divider />

            <div className="flex items-center my-1 text-sm sm:text- gap-1 text-white">
              <p>Status : {data?.details?.status}</p>
              <span>|</span>
              <p>
                Release Date :{" "}
                {moment(data?.details?.release_date).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>Revenue : {data?.details?.revenue || "Unkown"}</p>
            </div>

            <Divider />

            <div className="text-white">
              <p>
                <span>Director</span> :{" "}
                {data?.cast?.crew?.find((person) => person.job === "Director")
                  ?.name || "Unknown"}
              </p>
            </div>

            <Divider />

            <div className="text-white">
              <p>
                <span>Writer</span> :{" "}
                {data?.cast?.crew?.find((person) => person.job === "Writer")
                  ?.name || "Unknown"}
              </p>
            </div>

            <Divider />

            <div className="container mx-auto">
              <h2 className="font-bold text-lg text-white">Cast :</h2>
              <div className="my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                {data?.cast?.cast
                  ?.filter((el) => el?.profile_path)
                  .map((starCast) => (
                    <div key={starCast.id} className="w-24 text-center">
                      <div>
                        <img
                          src={baseUrl + starCast?.profile_path}
                          className="w-24 h-24 object-cover rounded-full mx-auto"
                          alt="Img"
                        />
                      </div>
                      <p className="font-bold text-white text-center">
                        {starCast?.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <HorizontalCards
            title={"Similar " + param.media_type}
            movies={data?.similar?.results || []}
          />
          <HorizontalCards
            title={"Recomended " + param.media_type}
            movies={data?.recomended?.results || []}
          />
        </div>
      </section>
      {playVideo && (
        <VideoPlay
          media_type={param.media_type}
          id={param.id}
          close={() => setPlayVideo(false)}
        />
      )}
    </>
  );
};

export default DetailsPage;
