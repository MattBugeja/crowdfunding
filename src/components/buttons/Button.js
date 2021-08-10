import classes from "./Button.module.css";
import React from "react";

function Button(props) {
  return (
    <button className={classes.btn} onClick={props.click}>
      {props.text}
    </button>
  );
}

export default Button;
