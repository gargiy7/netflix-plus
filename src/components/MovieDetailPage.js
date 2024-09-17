import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TMBD_API_OPTION, TMBD_IMG_CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import useCurrentMovieDetail from "../hooks/useCurrentMovieDetail";
import useCurrentMovieSimilar from "../hooks/useCurrentMovieSimilar";
import useCurrentMovieRecommendation from "../hooks/useCurrentMovieRecommendation";
import MovieList from "./MovieList";
import Header from "./Header";

const MovieDetailPage = () => {
  const { id } = useParams();

  useCurrentMovieDetail(id);
  useCurrentMovieSimilar(id);
  useCurrentMovieRecommendation(id);
  const movies = useSelector((store) => store.movies);

  return (
    <>
      <Header />
      {/* main details */}
      <div>MovieDetailPage</div>
      <div>Movie id is ---- {id}</div>
      <div>
        <img
          src={TMBD_IMG_CDN_URL + movies?.currentMovieDetail?.backdrop_path}
        />
      </div>
      {/* secondary detals */}
      <div className=" bg-black">
        <MovieList title={"Similar"} movies={movies?.currentMovieSimilar} />
        <MovieList
          title={"Recommendations"}
          movies={movies?.currentMovieRecommendation}
        />
      </div>
    </>
  );
};

export default MovieDetailPage;
