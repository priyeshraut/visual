import { Cards } from "../utils/constants";

const ExplorePageSimmer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
      {Cards}
    </div>
  );
};

export default ExplorePageSimmer;
