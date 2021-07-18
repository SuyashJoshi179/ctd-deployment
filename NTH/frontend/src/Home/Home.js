import nthlogo from "./nth-logo.png";
import "./Home.css";
import { Link, withRouter } from "react-router-dom";
import Timer from "../Timer/Timer";

const Home = ({ eventDate }) => {
  let diff = eventDate - new Date().getTime() < 0;
//   let val = diff ? (
//     marginBottom:"2%"
//   ): marginBottom:"1%"
// }
  return (
    <div className="nth-home">
      <img style={
        diff ? (
          {marginTop:"4%",
          width: "300px",}
        ):
        {marginBottom:"1%",
        width: "250px"}
      } src={nthlogo} alt="nth-logo" />
      <h3>Network Treasure Hunt</h3>
      <h5>Decrypt the Encrypted</h5>

      {eventDate - new Date().getTime() > 0 ? (
        
        <Timer eventDate={eventDate}></Timer>
      ) : (
        <Link to="/hunt">
          <button className="hunt-button hunt-button-css">Start Hunting</button>
        </Link>
      )}
    </div>
  );
};

export default Home;
