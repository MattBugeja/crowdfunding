import React from "react";
import { useState} from "react";
import classes from "./Button.module.css";

function Button(props) {
  const [smallButton] = useState(props.smallButton);

  return (
    <button
      className={
        smallButton ? `${classes.btn} ${classes.btnSmall} ` : `${classes.btn}`
      }
      onClick={props.click}
    >
      {props.text}
    </button>
  );
}

export default Button;
