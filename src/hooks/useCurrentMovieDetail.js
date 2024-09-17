import { useEffect } from "react";
import { TMBD_API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCurrentMovieDetail } from "../utils/movieSlice";

const useCurrentMovieDetail = (id) => {
  const dispatch = useDispatch();
  const getMovieDetail = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id,
      TMBD_API_OPTION
    );
    const json = await data.json();
    console.log(json);
    // const filterData = json.results.filter(
    //   (videos) => videos.type == "Trailer"
    // );

    // const trailer = filterData ? filterData[0] : json.results[0];
    dispatch(addCurrentMovieDetail(json));
  };
  useEffect(() => {
    getMovieDetail(id);
  }, []);
};

export default useCurrentMovieDetail;
