import { useDispatch } from "react-redux";
import { TMBD_API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      TMBD_API_OPTION
    );
    const json = await data.json();
    //console.log(json);
    const filterData = json.results.filter(
      (videos) => videos.type == "Trailer"
    );

    const trailer = filterData ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};

export default useMovieTrailer;
