// import classes from "./About.module.css";
import React from "react";
import BambooEdition from "../editions/BambooEdition";
import BlackEdition from "../editions/BlackEdition";
import SeEdition from "../editions/seEdition";
import NoRewardEdition from "../editions/NoRewardEdition";
import OverlayModal from "../overlay/OverlayModal";
import { useState } from "react";
import Thanks from "../Modals/Thanks";
import NoAmount from "../Modals/NoAmount";
import classes from "./item.module.css";

function Item(props) {
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
  const [enoughPledged, setEnoughPledged] = useState(true);
  const [tempPledgeValue, setTempPledgeValue] = useState(0);

  function pledgeSubmittedTracker() {
    pledgeSubmitted ? setPledgeSubmitted(false) : setPledgeSubmitted(true);
  }

  function enoughWasPledged() {
    setEnoughPledged(true);
    props.pledgeSubmitted();
  }

  function notEnoughPledged(e) {
    e.preventDefault();
    setEnoughPledged(false);
    pledgeSubmittedTracker();
  }

  function thanks() {
    props.setPledgeValue(tempPledgeValue);
    enoughWasPledged();
    pledgeSubmittedTracker();
    setTempPledgeValue(0);
  }

  return (
    <div className={classes.container}>
      <div className={props.modal ? classes.column : classes.rows}>
        {props.modal ? (
          <NoRewardEdition
            pledgeSubmitted={pledgeSubmittedTracker}
            setTempPledgeValue={setTempPledgeValue}
            modalMode={props.modal}
            tempPledgeValue={tempPledgeValue}
            enoughPledged={thanks}
            notEnoughPledged={notEnoughPledged}
          />
        ) : null}

        <BambooEdition
          setTempPledgeValue={setTempPledgeValue}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanks}
          notEnoughPledged={notEnoughPledged}
          modalMode={props.modal}
        />

        <BlackEdition
          setTempPledgeValue={setTempPledgeValue}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanks}
          notEnoughPledged={notEnoughPledged}
          modalMode={props.modal}
        />

        <SeEdition
          setTempPledgeValue={setTempPledgeValue}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanks}
          notEnoughPledged={notEnoughPledged}
          modalMode={props.modal}
        />
      </div>

      {pledgeSubmitted && <OverlayModal />}
      {pledgeSubmitted && <Thanks closeIt={pledgeSubmittedTracker} />}
      {pledgeSubmitted && !enoughPledged && (
        <NoAmount closeIt={pledgeSubmittedTracker} />
      )}
    </div>
  );
}

export default Item;
