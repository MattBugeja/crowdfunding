import classes from "./IntroBox.module.css";
import React from "react";
import bookmarkIcon from "./assets/icon-bookmark.svg";
import logo from "./assets/logo-mastercraft.svg";

import Button from "../button/Button";

function IntroBox() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <img className={classes.logo} src={logo} alt=""></img>
        <h1 className={classes.h1}>Mastercraft Bamboo Monitor Riser </h1>{" "}
        <div className={classes.details}>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </div>
        <div className={classes.btnBookmarkRow}>
          <div>
            <Button text={"Back this Project"} />
          </div>
          <div>
            <img src={bookmarkIcon} alt="icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroBox;
