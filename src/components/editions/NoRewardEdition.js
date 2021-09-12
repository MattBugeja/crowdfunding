import React from "react";
import Editions from "./editions";

const NoRewardEdition = (props) => {

  function enoughPledged(e) {
    e.preventDefault();
    props.enoughPledged();
     }


  const editionMinAmount = 1;
  return (

      <Editions
        title={"Pledge with no reward"}
        id={"NoReward"}
        setEditionID={props.setEditionID}
        editionMinAmount={editionMinAmount}
        info={
          "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
        }
        modalMode={props.modalMode}
        setTempPledgeValue={props.setTempPledgeValue}
        submit={
          editionMinAmount < props.tempPledgeValue
            ? enoughPledged
            : props.notEnoughPledged
        }
      />
  
  );
};

export default NoRewardEdition;
