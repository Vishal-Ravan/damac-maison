import React, { useState } from "react";
import Navbar from "../Navbar";
import banner from "../assets/bgna.jpg";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Popupform from "./Popupform";
import FloorPlanForm from "./FloorPlanForm";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const onOpenModals = (name) => {
    setSelectedName(name);
    setOpens(true);
  };
  const onCloseModals = () => setOpens(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="banner">
          <img src={banner} alt="" />
          <div className="banner-content">
            {/* <div className="subtitle">SEAPOINT AT EMAAR BEACHFRONT</div> */}
            <h1>DAMAC Maison Canal Views, Business Bay</h1>
            <div className="banner-content-wrapper">
              <h5>Price : AED 1.4 Million </h5>
              <h5>Bedrooms : 1-BR APARTMENT</h5>
              <h5>Sqft: 703 sq.ft.</h5>
            </div>
            <div className="banner-content-wrapper-button">
              <button className="consultation" onClick={onOpenModal}>
                Get Consultation
              </button>
              <button
                className="brochure "
                onClick={() => onOpenModals("damac maison canal views")}
              >
                Request Brochure
              </button>
            </div>
          </div>
        </div>
        <div>
          <Modal open={open} onClose={onCloseModal} center>
            <Popupform />
          </Modal>
        </div>
        <div>
          <Modal open={opens} onClose={onCloseModals} center>
            <FloorPlanForm selectedName={selectedName} />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Banner;
