import nthlogo from "./nth-logo.png";
import "./Home.css";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";

const Home = ({eventDate}) => {
  return (
    <div className="nth-home">
      <img src={nthlogo} alt="nth-logo" />
      <h3>Network Treasure Hunt</h3>
      <h5>Decrypt the Encrypted</h5>
      <p>begins in</p>
      {eventDate - new Date().getTime() > 0 ? (
        <Timer eventDate={eventDate}></Timer>
      ) : (
        <Link to="/hunt">
        <button className="mr-3 ml-2 mt-2 mb-2 hunt-button hunt-button-css">
          Start Hunting
        </button>
      </Link>
      )}
    </div>
  );
};

export default Home;
