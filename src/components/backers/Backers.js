import React from "react";
import classes from "./Backers.module.css";

function Backers(props) {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.number} >{props.number}</h1>
      </div>
      <div>
        <p className={classes.text}>{props.text}</p>
      </div>
    </div>
  );
}

export default Backers;
