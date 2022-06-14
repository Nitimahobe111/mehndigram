import React from "react";

import "./cshop.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from "mdb-react-ui-kit";

// import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";

function Cshop() {
  return (
    <>
      <div className="div1">
        <h1 className="shoph1">Shop With MehndiGram</h1>
        <p className="shoppara">
          We're pleased to introduce you to our collection of henna products
          designed by Sunita at Mehndi Seasons. The range includes fresh henna
          cones, templates and our exclusive Henna Artist Resting Cushion
          (HARC). Shop online today..
        </p>
      </div>
      <div className="div2">
        <MDBCard className="c1" style={{ maxWidth: "32rem" }}>
          <MDBCardImage src="/pic/shop1.jpg" position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle>Organic mehndi cones</MDBCardTitle>
            <MDBCardText>Organic mehndi cones. pack of 6</MDBCardText>
            <MDBBtn href="#">120 ₹</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="c2" style={{ maxWidth: "32rem" }}>
          <MDBCardImage src="/pic/shop2.jpg" position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle>Hena Mehndi Cones</MDBCardTitle>
            <MDBCardText>Hena Mehndi Cones . Pack of 12.</MDBCardText>
            <MDBBtn href="#">80 ₹</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="c3" style={{ maxWidth: "32rem" }}>
          <MDBCardImage src="/pic/shop3.jpeg" position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle>Neha Organic Mehndi</MDBCardTitle>
            <MDBCardText>Neha Organic Mehndi. Pack of 12.</MDBCardText>
            <MDBBtn href="#">100 ₹</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}
export default Cshop;
