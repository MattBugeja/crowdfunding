import React from "react";
import Editions from "./editions";
import { useState, useContext } from "react";
import BambooContext from "../contexts/bambooContext";

const BambooEdition = (props) => {

const {bambooCount, setBambooCount} = useContext(BambooContext) 

function enoughPledged(e){

  e.preventDefault()
  props.enoughPledged()


  setBambooCount(bambooCount-1)

}

console.log(bambooCount)

    const editionMinAmount = 25
  return (
    <div>
      <Editions
        title={"Bamboo Stand"}
        setTempPledgeValue={props.setTempPledgeValue}
        id={"bamboo"}
        // setEditionID={props.setEditionID}
        editionMinAmount={editionMinAmount}
        info={
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
        }
        startcount={bambooCount}
        modalMode={props.modalMode}
        text={"left"}
submit = {editionMinAmount < props.tempPledgeValue ? enoughPledged : props.notEnoughPledged}
           />
    </div>
  );
};

export default BambooEdition;
