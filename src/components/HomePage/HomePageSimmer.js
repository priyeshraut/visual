import { movieCardsCont } from "../../utils/constants";

const HomePageSimmer = () => {

  return (
    <>
      {/* Banner */}
      <div className="relative flex w-full mx-auto overflow-hidden">
        <div className="flex overflow-x-auto scroll-smooth transition-all no-scrollbar">
          <div className="relative top-0 h-[70vh] sm:h-screen w-screen bg-gray-800 animate-pulse p-4 sm:p-8 flex flex-col justify-center">
            {/* Title & Overview */}
            <div className="flex flex-col gap-4 w-full sm:w-[60%]">
              <div className="h-10 sm:h-16 bg-gray-700 rounded w-[80%]" />
              <div className="h-4 bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-700 rounded w-[90%]" />
              <div className="h-4 bg-gray-700 rounded w-[60%]" />
            </div>

            {/* Rating */}
            <div className="mt-6 h-4 bg-gray-700 rounded w-[30%]" />

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <div className="h-10 sm:h-12 w-24 sm:w-32 bg-gray-600 rounded" />
              <div className="h-10 sm:h-12 w-24 sm:w-32 bg-gray-600 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* MovieList */}
      <div className="pb-8 -mt-16 relative">
        <div className="absolute -top-12 w-full h-28 bg-gradient-to-t from-[#0F1014] to-transparent"></div>
        <div className="pl-4 pb-4 sm:pl-8">
          <div className="relative">
            <div className="pb-8 -mt-16 relative">{movieCardsCont}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageSimmer;
