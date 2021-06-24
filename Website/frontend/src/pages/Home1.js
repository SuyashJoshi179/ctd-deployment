import React from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import "../assets/css/Home1.css";
import "../assets/css/homeAndAbout.css";
import "../assets/css/carouselAnimation.css";
import ctdlogo from "../assets/img/ctd.png";
import TextScramble from "../components/TextScramble";
import Navbar from "./Navbar/NavigationBar";
import Footer from "./Footer/Footer";
import { Container, Row, Col, Carousel } from "react-bootstrap";

class Home1 extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
    this.vantaRefIEEE = React.createRef();
    this.vantaRefPISB = React.createRef();
    this.vantaRefPING = React.createRef();
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
      color: 0x111111,
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
        <div ref={this.vantaRef}>
          <Navbar></Navbar>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="section-home d-flex justify-content-center align-items-center ctd-image"
          >
            <img src={ctdlogo} alt="ctd-logo" />
          </div>

          {/* <HeadingAnimation3 /> */}
        </div>
        {/* SECTION-ABOUTUS */}
        <div className="section-about" id="section-aboutCTD">
          <Container className="container-lower">
            <Row className="" data-aos="fade-up" data-aos-duration="1000">
              {/* <HeadingAnimation /> */}
              <Row
                className="d-flex justify-content-start no-gutters"
                id="CTD-heading"
              >
                {/* <h1>Credenz Tech Days</h1> */}
                <div className="heading-wrapper">
                  <TextScramble text={"Credenz Tech Dayz"} />
                </div>
              </Row>
              <Row
                className="d-flex justify-content-center mt-5"
                style={{ margin: "auto" }}
              >
                <div className="display-4 my-5" style={{ color: "#fff" }}>
                  About Us
                </div>
                <p
                  className="lead text-justify p-2 about-content"
                  style={{ fontWeight: 400, width: "85%" }}
                >
                  Credenz Tech Dayz (CTD) is organized by the PICT IEEE Student
                  Branch annually, in the even semester, to coincide with the
                  IEEE membership drive. CTD brings with it a gusto that is
                  portrayed in the form of seminars by esteemed industrialists.
                  These seminars provide a platform wherein the students are
                  exposed to the latest innovations in technology. They also get
                  an opportunity to interact with experts from the industry,
                  thus giving them further insights into and helping them to
                  develop their skills in the technical field. Seminars are
                  organized as a part of CTD ’20. The seminars on “Competitive
                  Coding” and “Applied Machine Learning” drew deep interest from
                  the students and were also immensely appreciated. Apart from
                  the seminars, competitive technical events such as the
                  National Computing Contest (NCC) and Network Treasure Hunt
                  will be held to give CTD a technical hand. Take your wits and
                  expertise to the next level in non technical events like
                  Unravel and InQUIZitve.
                </p>
              </Row>
            </Row>
          </Container>
          {/* CAROUSEL */}
          <Container fluid>
            <Row className="d-flex justify-content-center align-items-center">
              <Carousel
                interval={"4000"}
                controls={false}
                style={{ height: "100%", width: "100%" }}
              >
                <Carousel.Item className="bg-transparent">
                  <div className="carousel-body container-fluid">
                    <Carousel.Caption
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div
                        className="carousel-text gradient-border d-flex justify-content-center"
                        id="IEEE"
                      >
                        <Row className="row-inner">
                          <Col className="d-flex align-items-center col-inner">
                            <div className="carousel-text-inner">
                              <h3 className="carousel-heading">
                                Institute of Electrical and Electronics
                                Engineering
                              </h3>
                              <p className="lead text-justify carousel-para">
                                The Institute of Electrical and Electronics
                                Engineering (IEEE) is an international
                                organization, which has been the nexus for
                                propagating scientific expertise among people
                                all over the globe. IEEE continues to attract
                                students, faculty and professionals from various
                                fields all around the world and is committed to
                                incorporate diversity in thoughts which is
                                essential for scientific development. IEEE
                                currently has Student Branches at thousands of
                                universities and colleges in hundreds of
                                countries throughout the world.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="bg-transparent">
                  <div className="carousel-body container-fluid">
                    <Carousel.Caption
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div
                        className="carousel-text gradient-border d-flex justify-content-center"
                        id="PISB"
                      >
                        <Row className="row-inner">
                          <Col className="d-flex align-items-center col-inner">
                            <div className="carousel-text-inner">
                              <h3 className="carousel-heading">
                                PICT IEEE Student Branch (PISB)
                              </h3>
                              <p className="lead text-justify  carousel-para">
                                PISB was established in the year 1998 with the
                                aim of inculcating the sense of technical
                                awareness amongst its student members. PISB
                                endeavers to escalate the knowledge and trends
                                in the diverse field of technologies amongst its
                                members. PISB upholds two major events every
                                year, Credenz and Credenz Tech Dayz with the
                                first one being conducted in the even semester
                                and the second one in the odd semester. PISB is
                                also marked by its Women in Engineering (WIE)
                                chapter, an initiative for impowerment of women
                                in the technical domain. PISB has been awarded
                                the Best Student Branch of IEEE in Pune section.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="bg-transparent">
                  <div className="carousel-body container-fluid">
                    <Carousel.Caption
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div className="carousel-text gradient-border" id="PING">
                        <Row className="row-inner">
                          <Col className="d-flex align-items-center col-inner">
                            <div className="carousel-text-inner">
                              <h3 className="carousel-heading ">
                                PICT IEEE NEWSLETTER GROUP (P.I.N.G.)
                              </h3>
                              <p className="lead text-justify  carousel-para">
                                P.I.N.G. (PICT IEEE Newsletter Group) is the
                                official technical magazine of PISB. P.I.N.G.
                                serves as a platform for individuals to portray
                                their technical ingenuity. It highlights
                                articles on cutting-edge technologies from
                                technocrats all around the globe including
                                students, industrialists and faculty members.
                                P.I.N.G. serves as a platform for individuals to
                                portray their technical ingenuity. It highlights
                                articles on cutting-edge technologies from
                                technocrats all around the globe including
                                students, industrialists and faculty members. It
                                also features interviews of distinguished
                                personalities in various technical domains.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Container>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default Home1;
