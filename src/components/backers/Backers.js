import React from "react";
import classes from "./Backers.module.css";

function Backers(props) {
  return (
    <div className={classes.container}>
      <div>
        <h1>{props.number}</h1>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Backers;
