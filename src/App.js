import "./App.css";
import Backers from "./components/backers/Backers";
import Header from "./components/header/Header";
import HeroImg from "./components/heroImg/HeroImg";
import IntroBox from "./components/introBox/IntroBox";
import ProgressBar from "./components/progressBar/ProgressBar";
import About from "./components/about/About";
import { useState, useEffect,} from "react";
import BambooContext from "./components/contexts/bambooContext";
import BlackContext from "./components/contexts/blackContext";
import seContext from "./components/contexts/seContext";

function App() {




  const [pledgeValue, setPledgeValue] = useState(0);

  const [amtBacked, setAmtBacked] = useState(85000);
  const [numOfBackers, setNumOfBackers] = useState(4999);
  const [progressBar, setProgressBar] = useState(85);

  const [pledgeSubmitted, setPledgeSubmitted] = useState(0);

  const [editionID, setEditionID] = useState("");

  function pledgeSubmittedTracker() {
    setPledgeSubmitted(pledgeSubmitted + 1);
  }

  

  function updatePledgeAmount() {
    const updatedAmt = parseInt(amtBacked) + parseInt(pledgeValue);

    updateProgressBar(updatedAmt);

    setAmtBacked(updatedAmt);
  }

  function updateNumOfBackers() {
    setNumOfBackers(numOfBackers + 1);
  }

  function updateProgressBar(updatedAmt) {
    const updatedProgress = (parseInt(updatedAmt) / 100000) * 100;

    console.log(updatedProgress);

    setProgressBar(updatedProgress);
  }

  useEffect(() => {
    updateNumOfBackers();
    updatePledgeAmount();
    setPledgeValue(0);
  }, [pledgeSubmitted]);


  const [bambooCount, setBambooCount] = useState(10)
  const bambooValue = {bambooCount, setBambooCount}


  const [blackCount, setBlackCount] = useState(10);
  const blackValue = {blackCount, setBlackCount}



  const [seCount, setSeCount] = useState(10);
  const seValue = {seCount, setSeCount}




  return (
    <BambooContext.Provider value = {bambooValue}>
      <BlackContext.Provider value = {blackValue}>
        <seContext.Provider value = {seValue}>
  
    <div>
      <Header />

      <HeroImg />

      <IntroBox
        // bambooCount={bambooCount}
        blackCount={blackCount}
        seCount={seCount}
        // reduceCount={click}
        // noRewardMinAmt={noRewardMinAmt}
        // bambooMinAmt={bambooMinAmt}
        // blackMinAmt={blackMinAmt}
        // seMinAmt={seMinAmt}
        pledgeValue={pledgeValue}
        setPledgeValue={setPledgeValue}
        pledgeSubmitted={pledgeSubmittedTracker}
        setEditionID={setEditionID}
        // currentcount={currentcount}
      />

      <div className="test2">
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
          <ProgressBar amount={progressBar} />
        </div>
        <div className="box box2">
          <About
            bambooCount={bambooCount}
            blackCount={blackCount}
            seCount={seCount}
            // noRewardMinAmt={noRewardMinAmt}
            // bambooMinAmt={bambooMinAmt}
            // blackMinAmt={blackMinAmt}
            // seMinAmt={seMinAmt}
          />
        </div>
      </div>
    </div>
    </seContext.Provider>
    </BlackContext.Provider>
    </BambooContext.Provider>
  );
}

export default App;
