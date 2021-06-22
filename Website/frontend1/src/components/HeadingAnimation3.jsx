import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import "../assets/css/headingAnimation.css";
import "../assets/css/headingAnimation3.css";
const HeadingAnimation3 = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 4000);
    // window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="heading-body">
      <ul className={hidden ? "text hidden" : "text"}>
        <div className="sign d-flex">
          <div className="d-flex justify-content-center">
            <li className="flicker display-1">C</li>
            <li className="ghost display-1">r</li>
            <li className="ghost display-1">e</li>
            <li className="ghost display-1">d</li>
            <li className="ghost display-1">e</li>
            <li className="ghost display-1">n</li>
            <li className="ghost display-1">z</li>
          </div>
          <div className="d-flex justify-content-center">
            <li className="spaced flicker display-1">T</li>
            <li className="ghost display-1">e</li>
            <li className="ghost display-1">c</li>
            <li className="ghost display-1">h</li>
          </div>
          <div className="d-flex justify-content-center">
            <li className="spaced flicker display-1">D</li>
            <li className="ghost display-1">a</li>
            <li className="ghost display-1">y</li>
            <li className="ghost display-1">s</li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default HeadingAnimation3;
