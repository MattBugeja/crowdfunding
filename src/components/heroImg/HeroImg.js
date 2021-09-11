import React from "react";
import heroImageMobile from "./assets/image-hero-mobile.jpg";
import heroImageDesktop from "./assets/image-hero-desktop.jpg";
import classes from "./HeroImg.module.css";

function HeroImg() {
  return (
    <img className={classes.heroImage} src={heroImageMobile} srcSet ={`${heroImageMobile} 375w, ${heroImageDesktop} 700w`} alt=""></img>
  );
}

export default HeroImg;
