import React from "react";
import "./training.css";
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

function Workshop() {
  return (
    <>
      <div className="onlineworkshop">
        <h1 className="onlineworkshoph">Online Workshops</h1>
        <p className="onlineworkshopp">
          Online training packages are designed completely around you, your
          experience and your learning objectives. They can be useful to henna
          artists of all levels and everyone who attends will receive a
          certificate of attendance by Mehndi Seasons.
        </p>
        <p></p>
      </div>
      <div className="pricing">
        <div className="maincontainer">
          <section>
            <div class="container py-5">
              <header class="text-center mb-5 text-white">
                <div class="row">
                  <div class="col-lg-8 mx-auto">
                    <h1 className="pricingh">Online Training Packages & Pricing</h1>
                    {/* <p>
                      Easily create a classy pricing table in Bootstrap 4.
                      <br />{" "}
                      <a href="#" class="text-reset">
                        Reactjs Bootstrap snippet by Jassa
                      </a>
                    </p> */}
                  </div>
                </div>
              </header>

              <div class="row text-center align-items-end">
                <div class="col-lg-4 mb-5 mb-lg-0">
                  <div class="bg-white p-5 rounded-lg shadow">
                    <h1 class="h6 text-uppercase font-weight-bold mb-4">
                      Henna Mixology
                    </h1>
                    <h2 class="h1 font-weight-bold">
                    ₹199
                      <span class="text-small font-weight-normal ml-2">
                        / month
                      </span>
                    </h2>

                    <div class="custom-separator my-4 mx-auto bg-primary"></div>

                    <ul class="list-unstyled my-5 text-small text-left">
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> 
                        How to roll a cone and fill
                      </li>
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> 
                        How to make your own natural henna paste mix with the perfect consistency!
                      </li>
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> 
                        How to achieve the best henna stain
                      </li>
                      <li class="mb-3 text-muted">
                        <i class="fa fa-times mr-2">
                        Henna safety
                        </i>
                        
                      </li>
                      {/* <li class="mb-3 text-muted">
                        <i class="fa fa-times mr-2"></i>
                        <del>Sed ut perspiciatis</del>
                      </li>
                      <li class="mb-3 text-muted">
                        <i class="fa fa-times mr-2"></i>
                        <del>Sed ut perspiciatis</del>
                      </li> */}
                    </ul>
                    {/* <a
                      href="#"
                      class="btn btn-primary btn-block p-2 shadow rounded-pill"
                    >
                      Subscribe
                    </a> */}
                  </div>
                </div>

                <div class="col-lg-4 mb-5 mb-lg-0">
                  <div class="bg-white p-5 rounded-lg shadow">
                    <h1 class="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                    <h2 class="h1 font-weight-bold">
                    ₹399
                      <span class="text-small font-weight-normal ml-2">
                        / month
                      </span>
                    </h2>

                    <div class="custom-separator my-4 mx-auto bg-primary"></div>

                    <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> 
                        Henna basics
                      </li>
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> 
                        Mastering how to use the henna cone
                      </li>
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> 
                        Learning basic henna drills
                      </li>
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> 
                        Learn how to create simple designs

                      </li>
                      {/* <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> 
                        Help and guidance to perfect your skill & technique
                      </li> */}
                      {/* <li class="mb-3 text-muted">
                        <i class="fa fa-times mr-2"></i>
                        <del>Sed ut perspiciatis</del>
                      </li> */}
                    </ul>
                    {/* <a
                      href="#"
                      class="btn btn-primary btn-block p-2 shadow rounded-pill"
                    >
                      Subscribe
                    </a> */}
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="bg-white p-5 rounded-lg shadow">
                    <h1 class="h6 text-uppercase font-weight-bold mb-4">
                      Bridal
                    </h1>
                    <h2 class="h1 font-weight-bold">
                    ₹899
                      <span class="text-small font-weight-normal ml-2">
                        / month
                      </span>
                    </h2>

                    <div class="custom-separator my-4 mx-auto bg-primary"></div>

                    <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> How to build a full bridal henna design to wrists
                      </li>
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i>  How to plan bridal henna layouts
                      </li>
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i>  Exploring popular grids & motifs
                      </li>
                      <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i>  Creating contrast and flow in your design
                      </li>
                      {/* <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> Sed ut
                        perspiciatis
                      </li> */}
                      {/* <li class="mb-3">
                        <i class="fa fa-check mr-2 text-primary"></i> Sed ut
                        perspiciatis
                      </li> */}
                    </ul>
                    {/* <a
                      href="#"
                      class="btn btn-primary btn-block p-2 shadow rounded-pill"
                    >
                      Subscribe
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div></div>
    </>
  );
}
export default Workshop;
