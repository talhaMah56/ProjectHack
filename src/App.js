import logo from './appstore.png';
import { Hero } from "./HeroSection/Hero";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
            <div style={{ backgroundColor: "#8096c06e" }}>
            </div>
          </div>
      </header>
        <Hero />
      </div>
  );
}

export default App;