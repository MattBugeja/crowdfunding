import React from "react";
import classes from "./IntroBox.module.css";
import { useState } from "react";
import bookmarkIcon from "./assets/icon-bookmark.svg";
import clickedBookmarkIcon from "./assets/icon-bookmark-clicked.svg";
import logo from "./assets/logo-mastercraft.svg";
import Button from "../buttons/Button";
import OverlayModal from "../overlay/OverlayModal";
import BackThisProject from "../Modals/Backthisproject";

function IntroBox(props) {
  const [isBookmarked, setIsBookedmarked] = useState({
    icon: bookmarkIcon,
    text: "Bookmark",
    style: { color: "#7A7A7A", backgroundColor: "hsla(0, 0%, 48%, 0.05)" },
  });
  const [backingModal, setIsBackingModal] = useState(false);

  function bookmarked() {
    isBookmarked.icon === clickedBookmarkIcon
      ? setIsBookedmarked({
          icon: bookmarkIcon,
          text: "Bookmark",
          style: { color: "#7A7A7A", backgroundColor: "hsl(0 0 18% 5%)" },
        })
      : setIsBookedmarked({
          icon: clickedBookmarkIcon,
          text: "Bookmarked",
          style: {
            color: "#147A73",
            backgroundColor: "hsla(176, 72%, 28%, 0.05)",
          },
        });
  }

  function changeBackingModal() {
    backingModal ? setIsBackingModal(false) : setIsBackingModal(true);
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
            setPledgeValue={props.setPledgeValue}
            pledgeSubmitted={props.pledgeSubmitted}
            modalMode={true}
          />
        )}

        <img
          className={classes.bookmarkIcon}
          src={isBookmarked.icon}
          alt="icon"
          onClick={bookmarked}
        ></img>
        <div className={classes.bookMark} style={isBookmarked.style}>
          {isBookmarked.text}
        </div>
      </div>
    </div>
  );
}

export default IntroBox;
