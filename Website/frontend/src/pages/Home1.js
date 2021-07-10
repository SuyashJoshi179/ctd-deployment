import React from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import "../assets/css/Home1.css";
import "../assets/css/homeAndAbout.css";
import "../assets/css/carouselAnimation.css";
import "../assets/css/scrambleText.css";
import ctdlogo from "../assets/img/ctd.png";
import Navbar from "./Navbar/NavigationBar";
import Footer from "./Footer/Footer";

class Home1 extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1,
      scaleMobile: 1.0,
      color: 0x15191e,
      shininess: 29.0,
      waveHeight: 11,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <div className="home-page">
        <div className="wrapper-outer-1" style={{ margin: "0", padding: "0" }}>
          <Navbar />
          <div className="d-block" style={{ width: "100%", height: "90vh" }}>
            <div className="wrapper-outer-2 section-home d-flex flex-column">
              <div ref={this.vantaRef} className="vanta-div">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="section-home d-flex justify-content-center align-items-center ctd-image"
                >
                  <img src={ctdlogo} alt="ctd-logo" />
                </div>

                {/* <HeadingAnimation3 /> */}
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
export default Home1;
