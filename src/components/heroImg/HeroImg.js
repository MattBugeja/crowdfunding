import React from "react";
import heroImage from "./assets/image-hero-mobile.jpg";

import "./HeroImg.css";
function HeroImg() {
  return (
    <div className="container">
      <img className="heroImage" src={heroImage} alt=""></img>
    </div>
  );
}

export default HeroImg;
