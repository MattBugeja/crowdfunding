import React from "react";
import Editions from "./editions";

const SeEdition = (props) => {
  const editionMinAmount = 75;
  return (
    <div>
      <Editions
        title={"Mahogany Special Edition"}
        id={"se"}
        setEditionID={props.setEditionID}
        editionMinAmount={editionMinAmount}
        info={
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
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

export default SeEdition;
