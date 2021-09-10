import React from "react";
import { useState } from "react";
import classes from "./editions.module.css";
import Button from "../buttons/Button";
import PledgeArea from "./PledgeArea";

function Editions(props) {
  const count = props.startcount;
  const [modalMode, setModalMode] = useState(props.modalMode);

  const minAmount = props.editionMinAmount;

  function setAboutMode() {
    setModalMode(true);
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
          <div className={classes.title}> {props.title} </div>
          <div className={classes.pledge}>Pledge ${minAmount} or more</div>
        </div>
        <div className={classes.info}>{props.info}</div>
        <div className={classes.amount}>
          {count} <span className={classes.left}>{props.text}</span>
        </div>
        {!modalMode && <Button text={"Select Reward"} click={setAboutMode} />}
      </div>

      {/* submit pledge area */}

      {(props.title === "Pledge with no reward" || count > 0) && modalMode && (
        <PledgeArea
          submit={props.submit}
          setTempPledgeValue={props.setTempPledgeValue}
        />
      )}
    </div>
  );
}

export default Editions;
