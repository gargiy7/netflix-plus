import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="w-full aspect-video pt-48 px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl ">{title}</h1>
        <p className="py-4 text-md w-4/12">{overview}</p>

        <div>
          <button className="bg-white text-black py-2 px-12 text-xl hover:bg-opacity-80">
            Play
          </button>
          <button className="bg-gray-500 text-white mx-2 py-2 px-8 text-xl bg-opacity-50">
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
