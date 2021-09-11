import React from "react";
import Editions from "./editions";
import { useContext } from "react";
import BlackContext from "../contexts/blackContext";

const BlackEdition = (props) => {
  const { blackCount, setBlackCount } = useContext(BlackContext);

  function enoughPledged(e) {
    e.preventDefault();
    props.enoughPledged();
    setBlackCount(blackCount - 1);
  }

  const editionMinAmount = 75;
  return (
    
      <Editions
        title={"Black Stand"}
        setTempPledgeValue={props.setTempPledgeValue}
        editionMinAmount={editionMinAmount}
        info={
          "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        }
        startcount={blackCount}
        modalMode={props.modalMode}
        text={"left"}
        submit={
          editionMinAmount < props.tempPledgeValue
            ? enoughPledged
            : props.notEnoughPledged
        }
      />
   
  );
};

export default BlackEdition;
