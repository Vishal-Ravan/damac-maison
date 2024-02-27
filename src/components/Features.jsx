import React from "react";
import Modal from "react-responsive-modal";
import { useState } from "react";
import ama from "../assets/icac.png";
import amb from "../assets/icaf.png";
import amc from "../assets/icae.png";
import amd from "../assets/icaa.png";
import ame from "../assets/icad.png";
import cont from "../assets/cont.png";
import CallWhatsapp from "./CallWhatsapp";

const Features = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="mtt">
      <div className="featurebg ">
        <div className="overlay"></div>
        <div className="container">
          <div className="features">
            <h2>Key Highlights</h2>
            <div className="features-wrapper">
              <div className="features-box">
                <div className="feature-box-icon">
                  <div className="feature-box-icon-img">
                    <img src={amd} alt="" />
                  </div>
                </div>
                <div className="features-box-content">
                  <h5>Breathtaking Location</h5>
                  <p>
                    Like most Damac Projects in Business Bay, it offers a
                    stunningly picturesque view of the Business Bay walk & canal
                    for residents and guests.
                  </p>
                </div>
              </div>
              <div className="features-box">
                <div className="feature-box-icon">
                  <div className="feature-box-icon-img">
                    <img src={cont} alt="" />
                  </div>
                </div>
                <div className="features-box-content">
                  <h5>Contemporary Elegance</h5>
                  <p>
                    Strikes a balance between modern chic aesthetics and
                    comfortable living, providing a functional yet cozy
                    atmosphere.
                  </p>
                </div>
              </div>
              <div className="features-box">
                <div className="feature-box-icon">
                  <div className="feature-box-icon-img">
                    <img src={ama} alt="" />
                  </div>
                </div>
                <div className="features-box-content">
                  <h5>Convenient City Exploration</h5>
                  <p>
                    Damac residences in Business Bay are an ideal starting point
                    for exploring the city, with convenient access to iconic
                    landmarks like Palm Jumeirah, Burj Khalifa, & The Dubai Mall
                    - one of the world's largest shopping complexes.
                  </p>
                </div>
              </div>
              <div className="features-box">
                <div className="feature-box-icon">
                  <div className="feature-box-icon-img">
                    <img src={ame} alt="" />
                  </div>
                </div>
                <div className="features-box-content">
                  <h5>Exclusive Luxury Living</h5>
                  <p>
                    A luxury apartment that offers an exclusive and refined
                    living experience, accompanied by top-notch services and a
                    focus on privacy for discerning guests.
                  </p>
                </div>
              </div>
              <div className="features-box">
                <div className="feature-box-icon">
                  <div className="feature-box-icon-img">
                    <img src={amc} alt="" />
                  </div>
                </div>
                <div className="features-box-content">
                  <h5>Inviting Interiors</h5>
                  <p>
                    Vibrant and airy interiors create a warm and inviting
                    ambiance, making it an ideal setting for a comfortable and
                    enjoyable stay.
                  </p>
                </div>
              </div>
              <div className="features-box">
                <div className="feature-box-icon">
                  <div className="feature-box-icon-img">
                    <img src={amb} alt="" />
                  </div>
                </div>
                <div className="features-box-content">
                  <h5>Iconic Skyline Vistas</h5>
                  <p>
                    Experience the allure of Dubai's skyline with breathtaking
                    Burj Khalifa views from this exquisite residence at DAMAC
                    Maison Canal View, Business Bay.
                  </p>
                </div>
              </div>
            </div>
            <div className="fetures-whatsapp">
              {/* <button className="whatsapp" onClick={onOpenModal}>
                Call via Whatsapp
              </button> */}

              <a
                href="https://2ly.link/1vLKk"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <button className="whatsapp">Call via Whatsapp</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal open={open} onClose={onCloseModal} center>
          <CallWhatsapp />
        </Modal>
      </div>
    </div>
  );
};

export default Features;
