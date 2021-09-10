import React from "react";
import Editions from "./editions";
import { useContext } from "react";
import seContext from "../contexts/seContext";

const SeEdition = (props) => {
  const { seCount, setSeCount } = useContext(seContext);

  function enoughPledged(e) {
    e.preventDefault();
    props.enoughPledged();
    setSeCount(seCount - 1);
  }

  const editionMinAmount = 75;
  return (
    <div>
      <Editions
        title={"Mahogany Special Edition"}
        setEditionID={props.setEditionID}
        editionMinAmount={editionMinAmount}
        info={
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        }
        startcount={seCount}
        modalMode={props.modalMode}
        text={"left"}
        setTempPledgeValue={props.setTempPledgeValue}
        submit={
          editionMinAmount < props.tempPledgeValue
            ? enoughPledged
            : props.notEnoughPledged
        }
      />
    </div>
  );
};

export default SeEdition;
