import React from "react";
import Editions from "./editions";

const BambooEdition = (props) => {

    const editionMinAmount = 25
  return (
    <div>
      <Editions
        title={"Bamboo Stand"}
        id={"bamboo"}
        setEditionID={props.setEditionID}
        editionMinAmount={editionMinAmount}
        info={
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
        }
        startcount={props.startcount}
        modalMode={props.modalMode}
        text={"left"}
        setTempPledgeValue={props.setTempPledgeValue}
        submit={editionMinAmount < props.tempPledgeValue ? props.enoughPledged : props.notEnoughPledged}
      />
    </div>
  );
};

export default BambooEdition;
