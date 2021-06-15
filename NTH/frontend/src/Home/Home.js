import nthlogo from "./nth-logo.png";
import "./Home.css";
import { Link } from "react-router-dom";

import Particles from 'react-particles-js'

const Home = () => {
  return (
    <div className="nth-home">
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 75,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        height="63vh"
      > */}
        <img src={nthlogo} alt="nth-logo" />
        <h3>Network Treasure Hunt</h3>
        <h5>Decrypt the Encrypted</h5>
        <Link to="/hunt">
          <button className="mr-3 ml-2 mt-2 mb-2 hunt-button hunt-button-css">
            Start Hunting
          </button>
        </Link>
      {/* </Particles> */}
      {/* <img src={nthlogo} alt="nth-logo" />
      <h3>Network Treasure Hunt</h3>
      <h5>Decrypt the Encrypted</h5>
      <Link to="/hunt">
        <button className="mr-3 ml-2 mt-2 mb-2 hunt-button hunt-button-css">
          Start Hunting
        </button>
      </Link> */}
    </div>
  );
};

export default Home;
