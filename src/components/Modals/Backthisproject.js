import React from "react";
import { useState, useEffect } from "react";
import classes from "./Backthisproject.module.css";
import Editions from "../editions/editions";
import Radio from "../buttons/Radio";
import { ReactComponent as CloseIcon } from "./assets/icon-close-modal.svg";
import OverlayModal from "../overlay/OverlayModal";
import { useRef } from "react";
function BackThisProject(props) {
  // const [reload, setReload] = useState(true);
  const [id, setId] = useState("123");

  function closeBackThisProject() {
    props.close();
  }

  function thanks() {
    props.reduceCount();
    props.close();
    props.thanks();
    console.log(Editions.title);
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
        {/* <form> */}

        <div>
          <Editions
            title={"Pledge with no reward"}
            info={
              "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
            }
            modalMode={true}
            // pledged={selectedPledge}
            clicked={thanks}
          />
        </div>

        <div>
          <Editions
            title={"Bamboo Stand"}
            pledge={"Pledge $25 or more"}
            info={
              "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            }
            startcount={props.bambooCount}
            modalMode={true}
            text={"left"}
            type={props.bambooType}
            clicked={thanks}
          />
        </div>
        <div>
          <Editions
            title={"Black Edition Stand"}
            pledge={"Pledge $75 or more"}
            info={
              "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            }
            startcount={props.blackCount}
            modalMode={true}
            text={"left"}
            clicked={thanks}
            type={props.blackType}
          />
        </div>
        <div>
          <Editions
            title={"Mahogany Special Edition"}
            pledge={"Pledge $200 or more"}
            info={
              "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            }
            startcount={props.seCount}
            modalMode={true}
            text={"left"}
            clicked={thanks}
            type={props.seType}
          />
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default BackThisProject;
