import React from "react";
import { TMBD_IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ poster_path }) => {
  return (
    <>
      <div className="w-56 mx-2 pr-4 ">
        <img
          className=""
          alt="movie_card"
          src={TMBD_IMG_CDN_URL + poster_path}
        />
      </div>
    </>
  );
};

export default MovieCards;
