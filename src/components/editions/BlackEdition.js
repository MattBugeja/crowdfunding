import React from "react";
import Editions from "./editions";

const BlackEdition = (props) => {
  // const
  const editionMinAmount = 75;

  return (
    <div>
      <Editions
        title={"Black Stand"}
        id={"black"}
        setEditionID={props.setEditionID}
        editionMinAmount={editionMinAmount}
        info={
          "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        }
        startcount={props.startcount}
        modalMode={props.modalMode}
        text={"left"}
        setTempPledgeValue={props.setTempPledgeValue}
        submit={
          editionMinAmount < props.tempPledgeValue
            ? props.enoughPledged
            : props.notEnoughPledged
        }
      />
    </div>
  );
};

export default BlackEdition;
