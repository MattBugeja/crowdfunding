import React from "react";
import heroImage from "./assets/image-hero-mobile.jpg";
import classes from "./HeroImg.module.css";

function HeroImg() {
  return (
    // <div className={classes.container}>
    <img className={classes.heroImage} src={heroImage} alt=""></img>
    // </div>
  );
}

export default HeroImg;
