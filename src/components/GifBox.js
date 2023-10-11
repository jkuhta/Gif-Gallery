import React from "react";
import "./Home.css";

const GifBox = ({ src }) => {
  return (
    <div>
      <img src={src} alt="" className="gif__box-img" />
    </div>
  );
};

export default GifBox;
