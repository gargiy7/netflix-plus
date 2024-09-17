import { useEffect } from "react";
import { TMBD_API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCurrentMovieSimilar } from "../utils/movieSlice";

const useCurrentMovieSimilar = (id) => {
  const dispatch = useDispatch();
  const getMovieSimilar = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/similar",
      TMBD_API_OPTION
    );
    const json = await data.json();
    console.log(json);
    // const filterData = json.results.filter(
    //   (videos) => videos.type == "Trailer"
    // );

    // const trailer = filterData ? filterData[0] : json.results[0];
    dispatch(addCurrentMovieSimilar(json.results));
  };
  useEffect(() => {
    getMovieSimilar(id);
  }, []);
};

export default useCurrentMovieSimilar;
