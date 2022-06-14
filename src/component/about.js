import React from "react";
import "./about.css";
import Button from "react-bootstrap/Button";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBCardImage
} from "mdb-react-ui-kit";

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <>
      <div className="aboutdiv">
        <h1 className="about">About the mehndiGram</h1>
        <p className="aboutpara">
          Welcome to the world of Mehndi Seasons. We specialise in intricate and
          beautiful bridal mehndi and monthly training sessions and coaching to
          teach the art of henna to others.
        </p>
        <p></p>
      </div>
      <div className="pawar">
        <MDBCard className="pawarcard" style={{ maxWidth: "1000px" }}>
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage src="/pic/seven.jpg" alt="..." fluid />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <h4 className="div2h4">About Sunita</h4>
                <p className="div2p">
                  Hello! I’m Sunita – the driving force behind Mehndi Seasons
                  and I’ve been passionate about henna since my teens. My mum
                  (thankfully) pushed me to create my first bridal mehndi as a
                  teen and from there I received plenty of requests to create
                  henna designs, but always thought of it more as a hobby. Since
                  then, I’ve combined full time jobs with my henna passion,
                  until 2015, when the demand and my passion for bridal mehndi
                  could no longer fit alongside a job and it became my career
                  focus. I’ve never looked back!
                  {/* Since then, I’ve travelled to destination weddings to create bridal mehndi, I’ve attended 
            ‘Spring Fling Henna Conference’ in San Francisco, and taught at the worlds largest
             henna conference ‘HennaCon’ in Los Angeles. I also collaborate with a team of henna
              specialists that I have either trained or experienced first hand. So you can be sure 
              that whether you meet me or work with one of my extended team, you’re getting
             a premium experience from Mehndi Seasons */}
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
      <div className="div3">
        <MDBCard className="pawarcard" style={{ maxWidth: "1000px" }}>
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage src="/pic/eight.jpeg" alt="..." fluid />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <h4 className="div3h4">Bridal Mehndi & Henna</h4>
                <p className="div3p">
                  As you’ll see from the gallery of captivating images, I am
                  extremely passionate about henna and love to work with brides
                  to incorporate specific features in their designs; whether
                  animal, floral or even portraits of the bride and groom, which
                  is hugely growing in popularity. I will take the time to chat
                  with you before starting the work, giving you the opportunity
                  to discuss how to personalise your henna.
                  {/* Booking your bridal mehndi with me doesn’t just mean you’ll have beautiful designs for 
              your wedding; you’ll also have the expertise that comes from spending many hours in the
               company of brides and their families over many years. We will enjoy a window of time
                together to talk about your plans, to reflect on how you are feeling and to get
                 some much needed relaxation before your wedding. It’s the perfect way to be prepared
                  for your big day.

                Although based in Leeds, West Yorkshire, I am available to travel
              anywhere, so just get in touch with your wedding date and location to find out more, 
                  or check out our Bridal page to read all about the experience! */}
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    </>
  );
}
export default About;
