import React from "react";
import "../assets/css/Home.css";
import Particles from "react-particles-js";
import HeadingAnimation3 from "../components/HeadingAnimation3";
const Home = () => {
  return (
    <div className="body-home">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="scale-in-center"
        id="welcome"
      >
        {/* <img className="home-img" src={brain} alt="brain" /> */}
        {/* <HeadingAnimation /> */}
        {/* <HeadingAnimation2 /> */}
        <HeadingAnimation3 />
      </div>

      <Particles
        id="particles-js"
        params={{
          particles: {
            number: {
              value: 400,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#560A86",
            },
            opacity: {
              value: 1,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 7,
              random: true,
              anim: {
                enable: true,
                speed: 3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 0.2,
            },
          },
        }}
      />
    </div>
  );
};

export default Home;
