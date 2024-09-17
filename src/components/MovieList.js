import React from "react";
import MovieCards from "./MovieCards";
import { Link, useNavigate } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  const navigate = useNavigate();
  console.log(movies);
  return (
    <>
      <div className="px-6">
        <h1 className="text-3xl py-3 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {/* 4565465465464
               * basically on refreshing the page the store empties itself at that time it shows error 
               i.e can't read null property due to nothing to map.
               so comment it out -> refresh the page -> store has the movie -> uncomment it  */}

            {movies?.map((movie) => (
              <Link to={"/browse/" + movie.id} key={movie.id}>
                <MovieCards poster_path={movie.poster_path} />
              </Link>
            ))}
            {/* {movies?.map((movie) => (
              <MovieCards key={movie.id} poster_path={movie.poster_path} />
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
