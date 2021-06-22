import React from "react";
import "../assets/css/contactCard1.css";
const ContactCard1 = ({ name, link, number, image }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="our-team">
          <div className="picture">
            <img
              className="img-fluid"
              src={image}
              alt="sampleIMg"
              style={{ height: "150px", width: "150px" }}
            />
          </div>
          <div className="team-content">
            <h3 className="name">{name}</h3>
            <a href={"tel:"+number}><h4 className="number">{number}</h4></a>
          </div>
          <ul className="social">
            <li>{/* Link here */}</li>
            <li>{/* link here */}</li>
            <li>{/* link here */}</li>
            <li>{/* link here */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactCard1;
