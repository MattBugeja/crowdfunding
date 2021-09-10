import React from "react";
import { useState } from "react";
import classes from "./Backthisproject.module.css";
import BambooEdition from "../editions/BambooEdition";

import { ReactComponent as CloseIcon } from "./assets/icon-close-modal.svg";
import BlackEdition from "../editions/BlackEdition";
import SeEdition from "../editions/seEdition";
import NoRewardEdition from "../editions/NoRewardEdition";

function BackThisProject(props) {

  const [tempPledgeValue, setTempPledgeValue] = useState(0);

  function closeBackThisProject() {
    props.close();
  }

  function thanksWithReward() {
    props.setPledgeValue(tempPledgeValue);
    props.enoughWasPledged();
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
          setTempPledgeValue={setTempPledgeValue}
          modalMode={true}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanksNoReward}
          notEnoughPledged={notEnoughPledged}
        />

        <BambooEdition
     
          setTempPledgeValue={setTempPledgeValue}
          modalMode={true}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanksWithReward}
          notEnoughPledged={notEnoughPledged}
        />

        <BlackEdition

          setTempPledgeValue={setTempPledgeValue}
          modalMode={true}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanksWithReward}
          notEnoughPledged={notEnoughPledged}
        />

        <SeEdition
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
