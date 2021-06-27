import { Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../axios";
import DetailsModal from "./DetailsModal";
import { isLogin } from "../../components/utils/index";

const Event = (props) => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleNTH = () => {
    window.location.href = "www.nth.pictieee.in";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.id);

    if (!isLogin()) {
      window.location.pathname = "/login";
    }

    axiosInstance
      .post("/place_order/", {
        event_id_fk: props.id,
      })
      .then((res) => {
        console.log(res.data.detail);
        alert(res.data.detail);
        history.push("/events");
        console.log(res.status);
      });
  };

  if (props.id === 3) {
    return (
      <div className="container1  d-flex justify-content-center mt-res">
        <div className="card1">
          <div className="imgBx">
            <img
              alt={props.eventname}
              src={props.icon}
              className="event-img-border"
            />
          </div>
          <div className="my-3 contentBx">
            <h3>{props.eventname}</h3>
            <Button
              className="mt-3 mb-3 pl-4 pr-4 details-btn"
              onClick={() => setModalShow(true)}
              variant="outline-light"
            >
              Details
            </Button>
            <DetailsModal
              eventname={props.eventname}
              logo={props.icon}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <div>
              <Button
                className="register-btn"
                onClick={() => window.open("http://nth.pictieee.in/", "_blank")}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container1  d-flex justify-content-center mt-res">
      <div className="card1">
        <div className="imgBx">
          <img
            alt={props.eventname}
            src={props.icon}
            className="event-img-border"
          />
        </div>
        <div className="contentBx">
          <h3>{props.eventname}</h3>

          <Button
            className="mt-3 mb-3 pl-4 pr-4 details-btn"
            onClick={() => setModalShow(true)}
            variant="outline-light"
          >
            Details
          </Button>
          <DetailsModal
            eventname={props.eventname}
            logo={props.icon}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <div>
            <Button className="register-btn" onClick={handleSubmit}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

//           <Button
//             className="buttons"
//             variant="outline-light"
//             onClick={handleSubmit}
//           >
