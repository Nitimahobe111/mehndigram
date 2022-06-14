import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaIconsReact } from "social-media-icons-react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <>
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <div className="maindiv">
          <a
            href="https://www.youtube.com/c/MehendiWale"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faYoutube} size="4x" />
          </a>
          <a
            href="https://www.facebook.com/Mehandigrm"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </a>

          <a
            href="https://www.instagram.com/mehandigrm"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </a>
        </div>
        <MDBContainer className="p-4">
          <section className=""></section>

          <section className="mb-4">
            <h3 className="tagline">
              Most trustable Organic Mehndi Distributor{" "}
            </h3>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <h5 className="text-white" href="https://mdbootstrap.com/">
            © 2022 Copyright: MehndiGram
          </h5>
        </div>
      </MDBFooter>
    </>
  );
};
export default Footer;
