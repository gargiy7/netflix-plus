import React from "react";
import { BACKGROUND_IMG } from "../utils/constants";

const Background = () => {
  return (
    <div>
      <div className="absolute">
        <img
          alt="background"
          src={BACKGROUND_IMG}
        />
      </div>
    </div>
  );
};

export default Background;
