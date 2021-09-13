import React from "react";
import BambooEdition from "./BambooEdition";
import BlackEdition from "./BlackEdition";
import SeEdition from "./seEdition";
import NoRewardEdition from "./NoRewardEdition";
import OverlayModal from "../overlay/OverlayModal";
import { useState } from "react";
import Thanks from "../modals/Thanks";
import PledgeTooLow from "../modals/PledgeTooLow";
import classes from "./EditionsList.module.css";

function EditionsList(props) {
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
  const [enoughPledged, setEnoughPledged] = useState(true);
  const [tempPledgeValue, setTempPledgeValue] = useState(0);

  function modalHandler() {
    pledgeSubmitted ? setPledgeSubmitted(false) : setPledgeSubmitted(true);
  }


  function notEnoughPledged(e) {
    e.preventDefault();
    setEnoughPledged(false);
    modalHandler();
  }

  function enoughWasPledged() {
    props.setPledgeValue(tempPledgeValue);
    modalHandler();
    setTempPledgeValue(0);
    setEnoughPledged(true);
    props.pledgeSubmittedTracker();
  }

  const commonProps = {  setTempPledgeValue : setTempPledgeValue,
  tempPledgeValue:tempPledgeValue,
  enoughPledged : enoughWasPledged,
  notEnoughPledged:notEnoughPledged,
}

  return (
    <div className={classes.container}>
      <div className={classes.column}>
        {props.modalMode ? (
          <NoRewardEdition
            {...commonProps}
            modalMode ={props.modalMode}
          />
        ) : null}

        <BambooEdition

{...commonProps}
modalMode ={props.modalMode}
        />

        <BlackEdition
        {...commonProps}
        modalMode ={props.modalMode}
        />

        <SeEdition
{...commonProps}
modalMode ={props.modalMode}
         />
      </div>

      {pledgeSubmitted && <OverlayModal />}
      {(pledgeSubmitted && enoughPledged) && <Thanks closeIt={modalHandler} />}
      {pledgeSubmitted && !enoughPledged && (
        <PledgeTooLow closeIt={modalHandler} />
      )}
    </div>
  );
}

export default EditionsList;
