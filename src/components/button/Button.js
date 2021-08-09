import classes from "./Button.module.css";
import React from "react";

function Button(props) {
  return <button className={classes.btn}>{props.text}</button>;
}

export default Button;
