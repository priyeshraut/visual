import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";

const useExplorePage = () => {
  const [data, setData] = useState([]); // Store unique items
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const params = useParams();

  const getData = async (reset = false) => {
    if (loading || page > totalPages) return; // Prevent unnecessary calls

    setLoading(true);
    try {
      const category =
        params.explore === "tvshows"
          ? "tv"
          : params.explore === "movies"
          ? "movie"
          : params.explore;

      const res = await fetch(
        `https://api.themoviedb.org/3/discover/${category}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        API_OPTIONS
      );

      const json = await res.json();
      //   console.log("Fetched Data:", json.results.length, "items");

      setTotalPages(json.total_pages);

      setData((prev) => {
        const uniqueData = new Map();
        const newData = reset ? json.results : [...prev, ...json.results];

        newData.forEach((item) => uniqueData.set(item.id, item));
        return Array.from(uniqueData.values());
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 100
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Reset state when category changes and fetch fresh data
    setData([]);
    setPage(1);
    setTotalPages(1);
    getData(true); // Call API immediately after category change
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return { data, params, loading };
};

export default useExplorePage;
