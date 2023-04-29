// import logo from "./appstore.png";
import { Hero } from "./HeroSection/Hero";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CodingSection } from "./CodingSection/CodingSection";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App">
          <header className="App-header">
            <div>
              <span className="title">
                <div>
                  <b>Break In</b>
                </div>
              </span>
            </div>
          </header>
          <div style={{ backgroundColor: "#8096c06e" }}></div>
        </div>
      </header> */}
      <Routes>
        <Route path="/" element={<Hero />} exact />
        <Route path="/coding-challenge/level-1" element={<Level1 />} />
      </Routes>
    </div>
  );
}

export default App;
