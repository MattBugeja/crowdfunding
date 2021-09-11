import classes from "./About.module.css";
import React  from "react";
import BambooEdition from "../editions/BambooEdition";
import BlackEdition from "../editions/BlackEdition";
import SeEdition from "../editions/seEdition";
import OverlayModal from "../overlay/OverlayModal";
import { useState } from "react";
import Thanks from "../Modals/Thanks";
import NoAmount from "../Modals/NoAmount";

function About(props) {
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

  function thanksWithReward() {
    props.setPledgeValue(tempPledgeValue);
    enoughWasPledged();
    pledgeSubmittedTracker();
    setTempPledgeValue(0);
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>About this project</div>
      <div className={classes.infoText}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand. <br /> <br /> Featuring artisan craftsmanship, the
        simplicity of design creates extra desk space below your computer to
        allow notepads, pens, and USB sticks to be stored under the stand.
      </div>

      <div className={classes.column}>
        <BambooEdition
          setTempPledgeValue={setTempPledgeValue}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanksWithReward}
          notEnoughPledged={notEnoughPledged}
          modalMode={false}
        />

        <BlackEdition   setTempPledgeValue={setTempPledgeValue}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanksWithReward}
          notEnoughPledged={notEnoughPledged}
          modalMode={false}/>
        <SeEdition   setTempPledgeValue={setTempPledgeValue}
          tempPledgeValue={tempPledgeValue}
          enoughPledged={thanksWithReward}
          notEnoughPledged={notEnoughPledged}
          modalMode={false}/>
      </div>

      {pledgeSubmitted && <OverlayModal />}
      {pledgeSubmitted && <Thanks closeIt={pledgeSubmittedTracker} />}
      {pledgeSubmitted && !enoughPledged && (
        <NoAmount closeIt={pledgeSubmittedTracker} />
      )}
    </div>
  );
}

export default About;
