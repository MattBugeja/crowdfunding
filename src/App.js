import "./App.css";
import Header from "./components/header/Header";
import HeroImg from "./components/heroImg/HeroImg";
import IntroBox from "./components/introBox/IntroBox";

function App() {
  return (
    <div>
      <div>
        <HeroImg />

        <Header />
      </div>
      <div>
        <IntroBox />
      </div>
    </div>
  );
}

export default App;
