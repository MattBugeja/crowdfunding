import React from "react";
import { useState } from "react";
import classes from "./Radio.module.css";

function Radio(props) {
  return (
    <input
      className={classes.btn}
      type="radio"
      name="radio"
      value={props.setValue}
      checked={props.checked}
      onClick={props.click}
      onChange={props.change}
    />

    // <input
    //   className={classes.btn}
    //   type="checkbox"
    //   name="checkbox"
    //   value={props.setValue}
    //   onClick={props.click}
    //   onChange={props.change}
    // ></input>
  );
}

export default Radio;
