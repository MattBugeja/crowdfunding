import React from "react";

import classes from "./Backthisproject.module.css";
import { ReactComponent as CloseIcon } from "./assets/icon-close-modal.svg";

import Item from "../testStuff/Item";

function BackThisProject(props) {
  function closeBackThisProject() {
    props.close();
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Back this project{" "}
        <CloseIcon className={classes.close} onClick={closeBackThisProject} />
      </div>

      <div className={classes.intro}>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </div>

      <Item
        setPledgeValue={props.setPledgeValue}
        pledgeSubmitted={props.pledgeSubmitted}
        modal={true}
      />
    </div>
  );
}

export default BackThisProject;
