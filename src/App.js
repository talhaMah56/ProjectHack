// import logo from "./appstore.png";
import { Hero } from "./HeroSection/Hero";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Level1 } from "./CodingSection/Level-1/Level1";
import { Level2 } from "./CodingSection/Level-2/Level2";
import { Level3 } from "./CodingSection/Level-3/Level3";
import { Level4 } from "./CodingSection/Level-4/Level4";

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
        <Route path="level-1" element={<Level1 />} />
        <Route path="level-2" element={<Level2 />} />
        <Route path="level-3" element={<Level3 />} />
        <Route path="level-4" element={<Level4 />} />
      </Routes>
    </div>
  );
}

export default App;
