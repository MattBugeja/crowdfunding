import "./App.css";
import Header from "./components/header/Header";
import HeroImg from "./components/heroImg/HeroImg";
import IntroBox from "./components/introBox/IntroBox";
import About from "./components/about/About";
import { useState } from "react";
import BambooContext from "./components/contexts/bambooContext";
import BlackContext from "./components/contexts/blackContext";
import seContext from "./components/contexts/seContext";
import CurrentBackers from "./components/backers/CurrentNumbers";

function App() {
  const [pledgeValue, setPledgeValue] = useState(0);
  const [pledgeSubmitted, setPledgeSubmitted] = useState(0);

  function pledgeSubmittedTracker() {
    setPledgeSubmitted(pledgeSubmitted + 1);
  }

  const [bambooCount, setBambooCount] = useState(10);
  const bambooValue = { bambooCount, setBambooCount };

  const [blackCount, setBlackCount] = useState(10);
  const blackValue = { blackCount, setBlackCount };

  const [seCount, setSeCount] = useState(10);
  const seValue = { seCount, setSeCount };

  return (
    <BambooContext.Provider value={bambooValue}>
      <BlackContext.Provider value={blackValue}>
        <seContext.Provider value={seValue}>
          <div>
            <Header />

            <HeroImg />
            <div className="pledges-container">
              <IntroBox
                setPledgeValue={setPledgeValue}
                pledgeSubmittedTracker={pledgeSubmittedTracker}
              />

              <div className="backers-About-Sections">
                <CurrentBackers
                  pledgeValue={pledgeValue}
                  setPledgeValue={setPledgeValue}
                  setPledgeSubmitted={setPledgeSubmitted}
                  pledgeSubmitted={pledgeSubmitted}
                />

                <div className="about-section">
                  <About
                    setPledgeValue={setPledgeValue}
                    pledgeSubmittedTracker={pledgeSubmittedTracker}
                  />
                </div>
              </div>
            </div>
          </div>
        </seContext.Provider>
      </BlackContext.Provider>
    </BambooContext.Provider>
  );
}

export default App;
