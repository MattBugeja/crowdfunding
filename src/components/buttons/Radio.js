import React from "react";
import { useState } from "react";
import classes from "./Radio.module.css";

function Radio(props) {
  return (
    <input
      className={classes.btn}
      type="radio"
      name="radio"
      // value="on"
      // checked={true}
      onClick={props.click}
      onChange={props.change}
    />
  );
}

export default Radio;
