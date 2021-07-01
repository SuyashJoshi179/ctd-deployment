import { Modal, Row, Col, Tab, Nav } from "react-bootstrap";

const DetailsModal = ({ info, eventname, logo, ...restProps }) => {
  return (
    <Modal
      {...restProps}
      size='md'
      className='details-modal'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header className='details-modal-header text-center' closeButton>
        <h3>{eventname}</h3>
      </Modal.Header>
      <Tab.Container
        className='tabs p-4'
        id='left-tabs-example'
        defaultActiveKey='first'>
        <Row className='details-modal-details'>
          <Col sm={3}>
            <Tab.Content>
              <Nav className='d-flex flex-column tabs justify-content-center align-items-start '>
                <div className='btn-block'>
                  <Nav.Link className='tab text-center' eventKey='first'>
                    Info
                  </Nav.Link>
                </div>
                <div className='btn-block'>
                  <Nav.Link className='tab text-center' eventKey='second'>
                    Rules
                  </Nav.Link>
                </div>

                <div className='btn-block'>
                  <Nav.Link className='tab text-center' eventKey='third'>
                    Contact
                  </Nav.Link>
                </div>
              </Nav>
            </Tab.Content>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane className='tab-content' eventKey='first'>
                {info.info}
              </Tab.Pane>
              <Tab.Pane className='tab-content' eventKey='second'>
                {info.rules.map((rule, id) => (
                  <p key={id} style={{ marginBottom: "0px" }}>
                    {id + 1}: {rule}
                  </p>
                ))}
              </Tab.Pane>
              <Tab.Pane className='tab-content' eventKey='third'>
                {info.contacts.map((contact, id) => (
                  <p key={id} style={{ marginBottom: "0px" }}>
                    {contact}
                  </p>
                ))}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Modal>
  );
};

export default DetailsModal;
