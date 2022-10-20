import React from "react";
import preloader from ".././Assets/load.gif";

export const Preloader = () => {
  return (
    <div>
      <img src={preloader} style={{ width: "100px", height: "100px" }} />
    </div>
  );
};
