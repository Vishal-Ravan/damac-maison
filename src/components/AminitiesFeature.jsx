import React from "react";
import concierge from "../assets/concierge.png";
import security from "../assets/security.png";
import hospital from "../assets/hospital.png";
import mall from "../assets/mall.png";
import gym from "../assets/dumbbell.png";
import games from "../assets/barbecue.png";
import restaurant from "../assets/restaurant.png";
import retails from "../assets/retails.png";
import parking from "../assets/parking.png";
import staff from "../assets/infinity.png";

const AminitiesFeature = () => {
  return (
    <>
      <div className="container ">
        <div className="feature-aminities ">
          <h2>Amenities</h2>
          <div className="feature-aminities-wrapper">
            <div className="feature-aminities-wrapper-box">
              <img src={mall} alt="" />
              <h5>Mall</h5>
            </div>
            <div className="feature-aminities-wrapper-box">
              <img src={security} alt="" />
              <h5>Security</h5>
            </div>
            <div className="feature-aminities-wrapper-box">
              <img src={parking} alt="" />
              <h5>Parking</h5>
            </div>
            <div className="feature-aminities-wrapper-box">
              <img src={gym} alt="" />
              <h5>Gym</h5>
            </div>
            <div className="feature-aminities-wrapper-box">
              <img src={games} alt="" />
              <h5>Sauna</h5>
            </div>
            <div className="feature-aminities-wrapper-box">
              <img src={hospital} alt="" />
              <h5>Healthcare Facilities</h5>
            </div>
            <div className="feature-aminities-wrapper-box">
              <img src={restaurant} alt="" />
              <h5>Restaurant</h5>
            </div>
            <div className="feature-aminities-wrapper-box">
              <img src={staff} alt="" />
              <h5>Pool</h5>
            </div>
            <div className="feature-aminities-wrapper-box">
              <img src={concierge} alt="" />
              <h5>Concierge</h5>
            </div>
            <div className="feature-aminities-wrapper-box">
              <img src={retails} alt="" />
              <h5>Retail Outlets</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AminitiesFeature;
