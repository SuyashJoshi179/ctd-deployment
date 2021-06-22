// import styles 
import {Row, Col, Container, Carousel} from 'react-bootstrap';

// import components
import TextScramble from '../components/TextScramble';

const AboutUs = () => {
    return ( 
        <div className="section-about">
          <Container>
            <Row
              className="d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* <HeadingAnimation /> */}
              <Row className="heading-wrapper">
                {/* <h1>Credenz Tech Days</h1> */}
                <TextScramble text={"About Us"} />
              </Row>
              <Row className="justify-content-center mt-5">
                <p
                  className="lead text-justify about-content"
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
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Carousel
                controls={false}
                interval={4000}
                style={{ height: "100%", width: "100%" }}
              >
                <Carousel.Item className="bg-transparent">
                  <div className="carousel-body container-fluid">
                    <Carousel.Caption
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div className="carousel-text gradient-border" id="IEEE">
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
                          {/* <Col md={4}>
                        <img
                          src={IEEE_logo}
                          style={{ height: "250px" }}
                          alt="IEEE img"
                          className="img-fluid"
                        />
                      </Col> */}
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
                      <div className="carousel-text gradient-border" id="PISB">
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
                          {/* <Col md={4}>
                        <img
                          src={PISB_logo}
                          style={{ height: "200px" }}
                          alt="IEEE img"
                          className="img-fluid"
                        />
                      </Col> */}
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
                          {/* <Col md={4}>
                        <img
                          src={PING_logo}
                          style={{ height: "250px" }}
                          alt="IEEE img"
                          className="img-fluid"
                        />
                      </Col> */}
                        </Row>
                      </div>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Container>
        </div>
     );
}
 
export default AboutUs;