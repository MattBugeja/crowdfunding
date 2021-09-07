import React from "react";
import classes from "./Thanks.module.css";
import { ReactComponent as SuccessIcon } from "./assets/icon-check.svg";
import Button from "../buttons/Button";

function NoAmount(props) {
  return (
    <div className={classes.container}>
      <SuccessIcon />
      <div className={classes.title}> That's Odd</div>
      <div className={classes.msg}>
        Thank you for helping us get one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. 
        
        Unfortunately it seems your pledge wasn't captured correctly. Please try again.
        
      </div>

      <Button smallButton="true" text="Got it!" click={props.closeIt} />
    </div>
  );
}

export default NoAmount;
