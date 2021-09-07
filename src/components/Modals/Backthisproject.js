import React from "react";
import { useState} from "react";
import classes from "./Backthisproject.module.css";
import Editions from "../editions/editions";

import { ReactComponent as CloseIcon } from "./assets/icon-close-modal.svg";

function BackThisProject(props) {

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
        <div>
          <Editions
          
            title={"Pledge with no reward"}
            id = "noReward"
            setEditionName = {props.setEditionName}
            info={
              "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
            }
          
            editionMinAmount={props.noRewardMinAmt}
            setTempPledgeValue={setTempPledgeValue}
            modalMode={true}
            submit={
              props.noRewardMinAmt < tempPledgeValue
                ? thanksNoReward
                : notEnoughPledged
            }
            
          />

        </div>

        <div>
            <Editions
            title={"Bamboo Stand"}
            id = {"bamboo"}
            setEditionName = {props.setEditionName}
            editionMinAmount={props.bambooMinAmt}
            info={
              "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            }
        
            startcount={props.bambooCount}
            modalMode={true}
            text={"left"}
            type={props.bambooType}
            setTempPledgeValue={setTempPledgeValue}
            submit={
              props.bambooMinAmt < tempPledgeValue
                ? thanksWithReward
                : notEnoughPledged
            }
            
          />
        </div>
        <div>
          <Editions
            title={"Black Edition Stand"}
            id = {"black"}
            setEditionName = {props.setEditionName}
           
            editionMinAmount={props.blackMinAmt}
            info={
              "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            }
           
            startcount={props.blackCount}
            s
            modalMode={true}
            text={"left"}
            submit={
              props.blackMinAmt < tempPledgeValue
                ? thanksWithReward
                : notEnoughPledged
            }
            setTempPledgeValue={setTempPledgeValue}
            type={props.blackType}
          />
        </div>
        <div>
          <Editions
            title={"Mahogany Special Edition"}
            setEditionName = {props.setEditionName}
            id="se"
            editionMinAmount={props.seMinAmt}
            info={
              "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            }
          
            startcount={props.seCount}
            modalMode={true}
            text={"left"}
            submit={
              props.seMinAmt < tempPledgeValue
                ? thanksWithReward
                : notEnoughPledged
            }
            setTempPledgeValue={setTempPledgeValue}
            type={props.seType}
          />
        </div>
      </div>
    </div>
  );
}

export default BackThisProject;
