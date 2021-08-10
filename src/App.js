import "./App.css";
import Backers from "./components/backers/Backers";
import Header from "./components/header/Header";
import HeroImg from "./components/heroImg/HeroImg";
import IntroBox from "./components/introBox/IntroBox";
import ProgressBar from "./components/progressBar/ProgressBar";
import About from "./components/about/About";
import BackThisProject from "./components/Modals/Backthisproject";

function App() {
  return (
    <div>
      <Header />

      <HeroImg />

      {/* <BackThisProject /> */}

      <IntroBox />

      <div className="test2">
        <div className="box box1">
          <Backers number={"$89,914"} text={"of $100,000 backed"} />
          <hr />
          <Backers number={"5,007"} text={"total backers"} />
          <hr />
          <Backers number={"56"} text={"days left"} />
          <ProgressBar />
        </div>
        <div className="box box2">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
