import { Modal, Row, Col, Tab, Nav } from "react-bootstrap";

const DetailsModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      className="details-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='details-modal-header' closeButton>
        <h3>{props.eventname}</h3>
      </Modal.Header>
      <Tab.Container
        className="tabs p-4"
        id="left-tabs-example"
        defaultActiveKey="first"
      >
        <Row className='details-modal-details'>
          <Col sm={3}>
            <Nav className="flex-column tabs">
              <Nav.Item>
                <Nav.Link className='tab' eventKey="first">Info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='tab' eventKey="second">Rules</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className='tab' eventKey="third">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane className="tab-content" eventKey="first">
                Network Treasure Hunt is an online treasure hunt where
                participants follow a trail of clues, surfing a range of
                websites to decipher the puzzles. Tread carefully along your
                way, solving a series of strategic clues, watching out for the
                concealed misdirection. Decrypt the clues, enjoy the hunt and
                race your way to the finish to win some exciting goodies! This
                is your chance to put your logic and reasoning to test. So, log
                on to our website and be a Sherlock for a day!
              </Tab.Pane>
              <Tab.Pane className="tab-content" eventKey="second">Bitch</Tab.Pane>
              <Tab.Pane className="tab-content" eventKey="third">Bitch</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Modal>
  );
};

export default DetailsModal;
