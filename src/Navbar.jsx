import React from "react";
import logoDark from "./assets/black.png";
import logoLight from "./assets/logo.png";
import cam from "./assets/cam.png";

import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container ">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            {/* <li>
              <a
                href="https://2ly.link/1vNQN"
                className="cam"
              >
                <img src={cam} alt="" />
                Schedule Video Call
              </a>
            </li> */}
            <li>
              <a href="#amenities">Amenities</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <h2 className="logo">
            <img src={scrolled ? logoLight : logoDark} alt="Logo" />
          </h2>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
