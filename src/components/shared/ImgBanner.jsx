import React from "react";
import { Link } from "react-router-dom";

const ImgBanner = ({ sty, imgVal }) => {
  return (
    <div className={sty}>
      <Link to="">
        <img src={imgVal} alt="" width="100%" />
      </Link>
    </div>
  );
};

export default ImgBanner;
