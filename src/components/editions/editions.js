import React from "react";

import { useState, useRef } from "react";
import classes from "./editions.module.css";
import Button from "../buttons/Button";

function Editions(props) {
  const idRef = useRef(props.id);
  

  const count = props.startcount;
  const [modalMode] = useState(props.modalMode);
  const minAmount = props.editionMinAmount;

  function updateEditionID() {
    props.setEditionID(idRef.current);
  }

  return (
    
    <div 
    
      className={
        count === 0
          ? `${classes.wrapper} ${classes.overlay}`
          : `${classes.wrapper} ${classes.active}`
      }
    >
      <div className={classes.container}>
        <div className={classes.titlePledgeContainer}>
          <div className={classes.title}> {props.title}  </div>
          <div className={classes.pledge}>Pledge ${minAmount} or more</div>
        </div>
        <div className={classes.info}>{props.info}</div>
        <div className={classes.amount}>
          {count} <span className={classes.left}>{props.text}</span>
        </div>
        {!modalMode && <Button text={"Select Reward"} />}
      </div>

      {/* submit pledge area */}

      {(props.title === "Pledge with no reward" || count > 0) && modalMode && (
        <div className={classes.enterPledge}>
          Enter your pledge
          <div className={classes.row}>
            <form onSubmit={props.submit}>
              <input
                className={classes.pledgeAmount}
                value={props.pledgeValue}
                onInput={(e) => props.setTempPledgeValue(e.target.value)}
                type="number"
                
              ></input>

              <Button
                type={props.type}
                smallButton={true}
                className={classes.btn}
                // click={updateEditionID}
                text="Continue"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Editions;
