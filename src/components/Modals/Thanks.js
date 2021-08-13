import React from "react";
import classes from "./Thanks.module.css";
import { useState } from "react";
import { ReactComponent as SuccessIcon } from "./assets/icon-check.svg";
import Button from "../buttons/Button";

function Thanks(props) {
  return (
    <div className={classes.container}>
      <SuccessIcon />
      <div className={classes.title}> Thanks for your support!</div>
      <div className={classes.msg}>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </div>

      <Button smallButton="true" text="Got it!" click={props.closeIt} />
    </div>
  );
}

export default Thanks;
