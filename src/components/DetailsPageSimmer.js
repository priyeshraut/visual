import React from "react";
import { profilePic, DetailSimmerCardsCont } from "../utils/constants";

const DetailsPageSimmer = () => {

  return (
    <>
      <div className="w-full h-[18.75rem] relative hidden sm:block bg-gray-800 animate-pulse">
        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[#0F1014] to-transparent"></div>
      </div>

      <div className="container mx-auto p-4 sm:p-8 py-20 sm:py-2 flex flex-col sm:flex-row gap-5 sm:gap-10 animate-pulse">
        <div className="flex flex-col justify-start items-center">
          <div className="sm:-mt-28 relative mx-auto sm:mx-0 bg-gray-700 h-80 sm:h-[18rem] w-60 sm:w-[15rem] mt-4"></div>
          <div className="bg-gray-700 rounded-lg my-5 w-60 h-10"></div>
        </div>

        <div className="flex flex-col gap-2 w-full sm:w-[60%]">
          <div className="h-4 bg-gray-700 rounded w-[50%]" />
          <div className="h-4 bg-gray-700 rounded w-[80%]" />

          <div className="flex items-center my-1 text-sm sm:text- gap-1 text-white">
            <div className="h-4 bg-gray-700 rounded w-[20%]" />
            <div className="h-4 bg-gray-700 rounded w-[20%]" />
            <div className="h-4 bg-gray-700 rounded w-[20%]" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-4 bg-gray-700 rounded w-[50%]" />
            <div className="h-20 bg-gray-700 rounded w-[80%]" />
          </div>

          <div className="flex items-center my-1 text-sm sm:text- gap-1 text-white">
            <div className="h-4 bg-gray-700 rounded w-[30%]" />
            <div className="h-4 bg-gray-700 rounded w-[30%]" />
            <div className="h-4 bg-gray-700 rounded w-[30%]" />
          </div>

          <div className="h-8 bg-gray-700 rounded w-[30%]" />

          <div className="h-8 bg-gray-700 rounded w-[30%]" />

          <div>
            <div className="h-8 bg-gray-700 rounded w-[30%]" />

            <div className="my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
              {profilePic}
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8 relative z-10">
        <div className="w-full h-28 bg-gradient-to-t from-[#0F1014] to-transparent"></div>
        <div className="pl-4 pr-4 sm:pl-8 sm:pr-8 pb-4">
          <div className="relative">
            <div className="pb-8 -mt-16 relative z-10">
              {DetailSimmerCardsCont}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPageSimmer;
