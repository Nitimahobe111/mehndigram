import React from "react";
import "./caro.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import Button from "react-bootstrap/Button";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBCol,
  MDBCardImage
} from "mdb-react-ui-kit";

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
const Caro = () => {
  return (
    <>
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              src="/pic/one.jpeg"
              alt="not waorking"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h2 className="carotext">Proffesional Bridal Henna</h2>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/pic/two.jpg"
              alt="not waorking"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h2 className="carotext">Explore the Mehndi Shop </h2>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src=" /pic/three.jpeg"
              alt="not waorking"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h2 className="carotext"> Follow Us on Instagram </h2>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="carddiv">
        <Card className="card1" style={{ width: "38rem" }}>
          <Card.Body>
            <Card.Title>
              {" "}
              <h6 className="card1h1">
                Thanks for visiting Mehndi Seasons{" "}
              </h6>{" "}
            </Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <h4 className="card1h4">
              "Growing up, I remember catching glimpses of the beautiful henna
              being adorned by brides on their wedding day. I always remember
              feeling in awe of it. Come and explore the bridal henna, trainings
              and products that are on offer today by Mehndi Seasons.
            </h4>
            {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
        {/* <div className="card1" class="card text-center">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content. With supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div> */}
        <MDBCard className="ca2" style={{ maxWidth: "50rem" }}>
          <MDBCardImage src="/pic/four.jpg" position="top" alt="..." />
          {/* <MDBCardBody>
            <MDBCardTitle>Card 2</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody> */}
        </MDBCard>
      </div>
      <div
        className="carddiv2"
        style={{ backgroundImage: "url(/pic/back.png)" }}
      >
        <MDBCard className="card3" style={{ maxWidth: "40rem" }}>
          <MDBCardImage src="/pic/five.jpg" position="top" alt="..." />
          <MDBCardBody>
            <h2 className="card3h2">Bridal</h2>
            <h4>A truly personal experience to get ready for your big day</h4>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="card4" style={{ maxWidth: "40rem" }}>
          <MDBCardImage src="/pic/six.jpg" position="top" alt="..." />
          <MDBCardBody>
            <h2 className="card4h2">Workshops</h2>
            <h4>Find out more about our henna training and workshops.</h4>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className="testimonialdiv">
        <h1 className="testimonial">Testimonial</h1>
        <p className="testimonialpara">
          "The Henna Flow Workshop has been absolutely amazing this year, for me
          it has given me more confidence and inspiration. I have met a
          wonderful bunch of people on the course who are all there for there
          for their own reasons, sharing their experiences and ideas with henna.
          We have worked on different themes every month and I can assure you no
          henna session is the same. The buzz from hyper fixing last minute, Pam
          hopping away with one foot covered in henna, covering our arms in
          henna and getting to learn the henna lingo; it really is a worthwhile
          course. A massive thank you to Sunita @mehndiseasons for hosting the
          classes and giving me the confidence to keep doing what I love best…
          henna!" Preet Panesar(Henna Flow)
        </p>
        <p></p>
      </div>
      <div className="instafollowdiv">
        <h1 className="followush1"> Follow Us</h1>
        <p className="followusp">
          {" "}
          Follow us on Instagram for the latest designs and a behind the scenes
          peek at Mehndi Seasons
        </p>
        <Button className="followusbutton" variant="secondary" size="lg">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="5"
            borderStyle="solid"
            icon="instagram"
            iconColor="rgb(138, 120, 71)"
            backgroundColor="rgba(187,0,0,0.85)"
            iconSize="5"
            roundness="20%"
            url="https://instagram.com/mehandigrm"
            size="35"
          />
          <h3 className="mendigram"> MehndiGram </h3>
        </Button>{" "}
      </div>
    </>
  );
};
export default Caro;
