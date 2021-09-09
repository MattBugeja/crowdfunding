import "./App.css";
import Backers from "./components/backers/Backers";
import Header from "./components/header/Header";
import HeroImg from "./components/heroImg/HeroImg";
import IntroBox from "./components/introBox/IntroBox";
import ProgressBar from "./components/progressBar/ProgressBar";
import About from "./components/about/About";
import { useState, useEffect, useContext } from "react";
// import { BambooContext, BambooProvider } from "./components/contexts/bambooContext";

function App() {

  // const {bambooCount, bambooMinAmt} = useContext(BambooContext)

  // const [bambooCountValue, setBambooCount] = bambooCount;
  // const [bambooMinAmtValue] = bambooMinAmt;
  // const [pledgeValueValue] = pledgeValue




  const [bambooCount, setBambooCount] = useState(10);
  const [blackCount, setBlackCount] = useState(10);
  const [seCount, setSeCount] = useState(10);

  // const [noRewardMinAmt] = useState(1);
  // const [bambooMinAmt] = useState(25);
  // const [blackMinAmt] = useState(75);
  // const [seMinAmt] = useState(200);

  const [pledgeValue, setPledgeValue] = useState(0);

  const [amtBacked, setAmtBacked] = useState(85000);
  const [numOfBackers, setNumOfBackers] = useState(4999);
  const [progressBar, setProgressBar] = useState(85);

  const [pledgeSubmitted, setPledgeSubmitted] = useState(0);

  const [editionID, setEditionID] = useState("");

  function pledgeSubmittedTracker() {
    setPledgeSubmitted(pledgeSubmitted + 1);
  }

  function currentcount() {
    switch (editionID) {
      case "bamboo":
        return bambooCount;
        break;
      case "black":
        return blackCount;
        break;
      case "se":
        return seCount;
    }
  }

  function click() {
    switch (editionID) {
      case "bamboo":
        setBambooCount(bambooCount - 1);
        break;
      case "black":
        setBlackCount(blackCount - 1);
        break;
      case "se":
        setSeCount(seCount - 1);
    }
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

  return (
    // <BambooContext.Provider> 
    <div>
      <Header />

      <HeroImg />

      <IntroBox
        bambooCount={bambooCount}
        blackCount={blackCount}
        seCount={seCount}
        reduceCount={click}
        // noRewardMinAmt={noRewardMinAmt}
        // bambooMinAmt={bambooMinAmt}
        // blackMinAmt={blackMinAmt}
        // seMinAmt={seMinAmt}
        pledgeValue={pledgeValue}
        setPledgeValue={setPledgeValue}
        pledgeSubmitted={pledgeSubmittedTracker}
        setEditionID={setEditionID}
        currentcount={currentcount}
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
    // </BambooContext.Provider>
  );
}

export default App;
