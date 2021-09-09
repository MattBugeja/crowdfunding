import React from "react";
import Editions from "./editions";

const NoRewardEdition = (props) => {
  const editionMinAmount = 1;
  return (
    <div>
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
            ? props.enoughPledged
            : props.notEnoughPledged
        }
      />
    </div>
  );
};

export default NoRewardEdition;
