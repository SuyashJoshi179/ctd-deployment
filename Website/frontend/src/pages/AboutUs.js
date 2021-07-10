// import styles 
import {Row, Col, Container, Carousel} from 'react-bootstrap';
import '../assets/css/About.css'

// import components
import ScramblingText from '../components/ScramblingText';


import CTDlogo from '../assets/img/ctd.png'

const AboutUs = () => {
    return ( 
        <div>
          {/* SECTION-ABOUTUS */}
          <div className="section-about" id="section-aboutCTD">
          <Container className="container-lower">
          <div className="heading-wrapper CTD-heading-wrapper">
          <ScramblingText
            scrambleText={"Credenz Tech Dayz"}
            mainContainer="CTD-heading-wrapper"
          />
        </div>
          </Container>
          <Container fluid className="container-lower pt-5">
              {/* <HeadingAnimation /> */}
              <Row>
              <Col lg={4} sm={12} className='ctd-about-logo'>
              <img src={CTDlogo} width='300px' alt='CTD Logo' />
              </Col>
                <Col lg={8} sm={12}>
                <p
                className="lead text-justify  about-content"
                style={{ fontWeight: 400, width: "85%", textAlign:'justify' }}
              >
              Credenz Tech Dayz is an intra-college annual techfest organized by the PICT IEEE Student Branch where the brightest minds of PICT compete in technical as well as non-technical events. Participants get a chance to test their logical aptitute and problem solving skills in events like like National Computing Contest and Reverse Coding. The Network Treasure Hunt is an online cryptic hunt that challenges you to use every tool at your disposal and piece together every bit of the puzzle. Inquisitive is a mind-boggling test to question your wits and test your general knowledge. This is a chance for the students to go beyond the traditional spheres of academics and make the most of their potential.
              </p>
                </Col>
                
              </Row>
          </Container>
          {/* CAROUSEL */}
          <Container className="container-lower">
            <Row className="" data-aos="fade-up" data-aos-duration="1000">
              <Row
                className="d-flex justify-content-start no-gutters"
                id="CTD-heading"
              >
                {/* <h1>ABOUT US</h1> */}
                <div className="heading-wrapper aboutUs-wrapper">
                  <ScramblingText
                    scrambleText={"About Us"}
                    mainContainer={"aboutUs-wrapper"}
                  />
                </div>
              </Row>
            </Row>
          </Container>
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
                                students, faculty and professionals from
                                various fields all around the world and is
                                committed to incorporate diversity in thoughts
                                which is essential for scientific development.
                                IEEE currently has Student Branches at
                                thousands of universities and colleges in
                                hundreds of countries throughout the world.
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
                                in the diverse field of technologies amongst
                                its members. PISB upholds two major events
                                every year, Credenz and Credenz Tech Dayz with
                                the first one being conducted in the even
                                semester and the second one in the odd
                                semester. PISB is also marked by its Women in
                                Engineering (WIE) chapter, an initiative for
                                impowerment of women in the technical domain.
                                PISB has been awarded the Best Student Branch
                                of IEEE in Pune section.
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
                        className="carousel-text gradient-border"
                        id="PING"
                      >
                        <Row className="row-inner">
                          <Col className="d-flex align-items-center col-inner">
                            <div className="carousel-text-inner">
                              <h3 className="carousel-heading ">
                                PICT IEEE NEWSLETTER GROUP (P.I.N.G.)
                              </h3>
                              <p className="lead text-justify  carousel-para">
                                P.I.N.G. (PICT IEEE Newsletter Group) is the
                                official technical magazine of PISB. P.I.N.G.
                                serves as a platform for individuals to
                                portray their technical ingenuity. It
                                highlights articles on cutting-edge
                                technologies from technocrats all around the
                                globe including students, industrialists and
                                faculty members. P.I.N.G. serves as a platform
                                for individuals to portray their technical
                                ingenuity. It highlights articles on
                                cutting-edge technologies from technocrats all
                                around the globe including students,
                                industrialists and faculty members. It also
                                features interviews of distinguished
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
        </div>
     );
}
 
export default AboutUs;