import React from "react";
import { useState, useEffect } from "react";
import Backers from "./Backers";
import ProgressBarMine from "../progressBar/ProgressBar";

function CurrentBackers(props) {
  const [amtBacked, setAmtBacked] = useState(85000);
  const [numOfBackers, setNumOfBackers] = useState(4999);
  const [progressBar, setProgressBar] = useState(85);

  function updatePledgeAmount() {
    const updatedAmt = parseInt(amtBacked) + parseInt(props.pledgeValue);
    updateProgressBar(updatedAmt);
    setAmtBacked(updatedAmt);
  }

  function updateNumOfBackers() {
    setNumOfBackers(numOfBackers + 1);
  }

  function updateProgressBar(updatedAmt) {
    const updatedProgress = (parseInt(updatedAmt) / 100000) * 100;
    setProgressBar(updatedProgress);
  }

  useEffect(() => {
    updateNumOfBackers();
    updatePledgeAmount();
    props.setPledgeValue(0);
  }, [props.pledgeSubmitted]);

  return (
    <div className="box box1">
      <Backers
        number={`$${amtBacked.toLocaleString()}`}
        text={"of $100,000 backed"}
      />
      <hr />
      <Backers
        number={`${numOfBackers.toLocaleString()}`}
        text={"total backers"}
      />
      <hr />
      <Backers number={"56"} text={"days left"} />
      <ProgressBarMine amount={progressBar} />
    </div>
  );
}

export default CurrentBackers;
