import React from "react";
import { useState } from "react";
import classes from "./editions.module.css";
import Button from "../buttons/Button";
import Radio from "../buttons/Radio";
import BackThisProject from "../Modals/Backthisproject";

function Editions(props, { increaseCount }) {
  const [count, setCount] = useState(props.startcount);
  const [modalMode, setModalMode] = useState(props.modalMode);
  const [selectedPledge, setSelectedPledge] = useState(props.pledged);
  const [restart, setRestart] = useState(false);

  function pledgeHandler() {
    // selectedPledge ? setSelectedPledge(false) : setSelectedPledge(true);
    setSelectedPledge(true);
  }
  function notPledge() {
    setSelectedPledge(false);
  }

  function reload() {
    setRestart(true);
  }

  // function turnOffPledge() {}

  return (
    <div
      className={
        selectedPledge
          ? ` ${classes.wrapper} ${classes.active}`
          : `${classes.wrapper}`
      }
    >
      <div className={classes.container}>
        <div className={classes.row}>
          {modalMode && (
            <div>
              <Radio click={props.change} change={pledgeHandler} />
            </div>
          )}

          {/* {restart && <BackThisProject />} */}

          <div className={classes.titlePledgeContainer}>
            <div className={classes.title}> {props.title}</div>
            <div className={classes.pledge}>{props.pledge}</div>
          </div>
        </div>
        <div className={classes.info}>{props.info}</div>
        <div className={classes.amount}>
          {count} <span className={classes.left}>{props.text}</span>
        </div>
        {!modalMode && <Button text={"Select Reward"} />}
      </div>
      <div className={classes.enterPledge}>
        Enter your pledge
        <div className={classes.row}>
          <input className={classes.pledgeAmount} type="number"></input>
          <Button smallButton={true} className={classes.btn} text="Continue" />
        </div>
      </div>
    </div>
  );
}

export default Editions;
