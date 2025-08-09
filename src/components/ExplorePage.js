import Card from "./Card";
import ExplorePageSimmer from "./ExplorePageSimmer";
import useExplorePage from "../hooks/useExplorePage";

const ExplorePage = () => {
  const { data, params, loading } = useExplorePage();

  return (
    <div className="py-20 px-4 sm:px-8">
      <div>
        <h3 className="capitalize text-white text-xl sm:text-2xl md:text-3xl font-semibold my-5">
          Popular {params.explore}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {data.map((exploreData) => (
            <Card key={exploreData.id} data={exploreData} />
          ))}
        </div>

        {loading && <ExplorePageSimmer />}
      </div>
    </div>
  );
};

export default ExplorePage;
