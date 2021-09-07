import React from "react";
import classes from "./ProgressBar.module.css";

function ProgressBar(props) {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.progressMarker} style ={{width : props.amount+"%"}}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
