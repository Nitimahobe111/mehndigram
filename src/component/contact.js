import React from "react";
import "./contact.css";
import Form from "./form";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";

// import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";

function Contact() {
  return (
    <>
      <div className="div1">
        <h1 className="getintouchh1">Get in touch</h1>
        <p className="getintouchpara">
          For any general queries on any of our products or services, please
          drop us a message using the form below.
        </p>
      </div>
      <Form />
    </>
  );
}
export default Contact;
