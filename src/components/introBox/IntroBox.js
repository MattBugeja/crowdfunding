import React from "react";
import classes from "./IntroBox.module.css";
import { useState } from "react";
import bookmarkIcon from "./assets/icon-bookmark.svg";
import clickedBookmarkIcon from "./assets/icon-bookmark-clicked.svg";
import logo from "./assets/logo-mastercraft.svg";
import Button from "../buttons/Button";
import OverlayModal from "../overlay/OverlayModal";
import BackThisProject from "../Modals/Backthisproject";
import Thanks from "../Modals/Thanks";
import NoAmount from "../Modals/NoAmount";

function IntroBox(props) {
  const [isBookmarked, setIsBookedmarked] = useState(bookmarkIcon);
  const [backingModal, setIsBackingModal] = useState(false);
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
  const [enoughPledged, setEnoughPledged] = useState(true);

  function bookmarked() {
    isBookmarked === clickedBookmarkIcon
      ? setIsBookedmarked(bookmarkIcon)
      : setIsBookedmarked(clickedBookmarkIcon);
  }

  function changeBackingModal() {
    backingModal ? setIsBackingModal(false) : setIsBackingModal(true);
  }

  function pledgeSubmittedTracker() {
    pledgeSubmitted ? setPledgeSubmitted(false) : setPledgeSubmitted(true);
  }

  function enoughWasPledged() {
    setEnoughPledged(true);
    props.pledgeSubmitted();
  }

  function notEnoughPledged() {
    setEnoughPledged(false);
  }

  return (
    <div className={classes.text}>
      <img className={classes.logo} src={logo} alt=""></img>
      <h1 className={classes.h1}>Mastercraft Bamboo Monitor Riser </h1>{" "}
      <div className={classes.details}>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </div>
      <div className={classes.btnBookmarkRow}>
        <div>
          <Button text={"Back this Project"} click={changeBackingModal} />
        </div>
        {backingModal && <OverlayModal />}
        {backingModal && (
          <BackThisProject
            close={changeBackingModal}
            thanks={pledgeSubmittedTracker}
            notEnoughPledged={notEnoughPledged}
            enoughWasPledged={enoughWasPledged}
            setPledgeValue={props.setPledgeValue}
          />
        )}

        {pledgeSubmitted && <OverlayModal />}
        {pledgeSubmitted && <Thanks closeIt={pledgeSubmittedTracker} />}
        {pledgeSubmitted && !enoughPledged && (
          <NoAmount closeIt={pledgeSubmittedTracker} />
        )}

        <div>
          <img
            className={bookmarkIcon}
            src={isBookmarked}
            alt="icon"
            onClick={bookmarked}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default IntroBox;
