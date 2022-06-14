import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>M</span>ehndigram
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutus">About us</a>
            </li>
            {/* <li>
              <a href="/gallery">Gallery</a>
            </li> */}
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/training">Training</a>
            </li>

            <li>
              <a href="/contactus">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
