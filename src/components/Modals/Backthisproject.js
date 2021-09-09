import React from "react";
import { useState } from "react";
import classes from "./Backthisproject.module.css";
import Editions from "../editions/editions";
import BambooEdition from "../editions/BambooEdition";

import { ReactComponent as CloseIcon } from "./assets/icon-close-modal.svg";
import BlackEdition from "../editions/BlackEdition";
import SeEdition from "../editions/seEdition";
import NoRewardEdition from "../editions/NoRewardEdition";

function BackThisProject(props) {
  // const [bambooCountValue, setBambooCount] = bambooCount;
  // const [bambooMinAmtValue] = bambooMinAmt;
  // const [pledgeValueValue] = pledgeValue
  // const [titleValue] = title
  // const editions = ["bamboo", "black", "specialEdition"];

  const [tempPledgeValue, setTempPledgeValue] = useState(0);

  function closeBackThisProject() {
    props.close();
  }

  function thanksWithReward() {
    props.setPledgeValue(tempPledgeValue);
    props.enoughWasPledged();
    props.reduceCount();
    props.close();
    props.thanks();
  }

  function thanksNoReward() {
    props.setPledgeValue(tempPledgeValue);
    props.enoughWasPledged();
    props.close();
    props.thanks();
  }

  function notEnoughPledged(e) {
    props.close();
    props.notEnoughPledged();
    props.thanks();
  }

  // const editionsDataTest = editionsData.data;

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

      <div className={classes.rows}>
        <NoRewardEdition
          setEditionID={props.setEditionID}
          setTempPledgeValue={setTempPledgeValue}
          modalMode={true}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanksWithReward}
          notEnoughPledged={notEnoughPledged}
        />

        <BambooEdition
          setEditionID={props.setEditionID}
          startcount={props.bambooCount}
          setTempPledgeValue={setTempPledgeValue}
          modalMode={true}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanksWithReward}
          notEnoughPledged={notEnoughPledged}
        />

        <BlackEdition
          setEditionID={props.setEditionID}
          startcount={props.blackCount}
          setTempPledgeValue={setTempPledgeValue}
          modalMode={true}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanksWithReward}
          notEnoughPledged={notEnoughPledged}
        />

        <SeEdition
          setEditionID={props.setEditionID}
          startcount={props.seCount}
          setTempPledgeValue={setTempPledgeValue}
          modalMode={true}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanksWithReward}
          notEnoughPledged={notEnoughPledged}
        />
      </div>
    </div>
  );
}

export default BackThisProject;
