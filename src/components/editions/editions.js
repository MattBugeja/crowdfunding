import React from "react";
import { useState } from "react";
import classes from "./editions.module.css";
import Button from "../buttons/Button";
import Radio from "../buttons/Radio";

function Editions(props) {
  const [count, setCount] = useState(props.startcount);
  const [modalMode, setModalMode] = useState(props.modalMode);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {modalMode && <Radio />} {props.title}
      </div>
      <div className={classes.pledge}>{props.pledge}</div>
      <br />
      <br />
      <div className={classes.info}>{props.info}</div>
      <div className={classes.amount}>
        {" "}
        {count} <span className={classes.left}>{props.text}</span>
      </div>
      {!modalMode && <Button text={"Select Reward"} />}
    </div>
  );
}

export default Editions;
