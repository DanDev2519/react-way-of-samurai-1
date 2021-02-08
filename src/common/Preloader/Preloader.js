import React from "react";
import preloader from "./../../assets/img/preloader.jpg";

let Preloader = () => {
  return (
    <div>
      <img src={preloader} alt="Loading" width="60" />
    </div>
  );
};

export default Preloader;
