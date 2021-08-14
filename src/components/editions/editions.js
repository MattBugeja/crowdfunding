import React from "react";
import reactDom from "react-dom";
import { useState, useEffect } from "react";
import classes from "./editions.module.css";
import Button from "../buttons/Button";
import Radio from "../buttons/Radio";
import Item from "../testStuff/Item";
import OverlayNoneLeft from "../overlay/OverlayNoneLeft.js";

function Editions(props) {
  
  const [selectedPledge, setSelectedPledge] = useState(false);
  // const [count, setCount] = useState(props.startcount);

  const count = props.startcount;

  const [modalMode, setModalMode] = useState(props.modalMode);
  const [id, setId] = useState("123");

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
          <div className={classes.title}> {props.title}</div>
          <div className={classes.pledge}>{props.pledge}</div>
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
            <input className={classes.pledgeAmount} type="number"></input>
            <Button
              type={props.type}
              smallButton={true}
              className={classes.btn}
              text="Continue"
              click={props.clicked}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Editions;
