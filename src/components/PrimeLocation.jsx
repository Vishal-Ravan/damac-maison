import React from "react";
import metro from "../assets/metro.png";
import burj from "../assets/burj.png";
import mall from "../assets/mall.png";
import BEACHFRONT from "../assets/beach.png";

const PrimeLocation = () => {
  return (
    <>
      <div className="container">
        <div className="prime-location mtt">
          <div className="prime-location-head">
            <h2 className="title">Prime Location</h2>
            <p>
              Set in an incredibly convenient locale, this exceptional property
              offers easy access to key destinations. This exceptional location
              not only enhances day-to-day living but also underscores the
              accessibility of various amenities and attractions
            </p>
          </div>
          <div className="prime-location-bottom">
            <div className="prime-location-bottom-wrapper">
              <img src={metro} alt="" />
              <h6>
                BUSINESS BAY <br /> METRO STATION
              </h6>
              <p>8 Minutes</p>
            </div>
            <div className="prime-location-bottom-wrapper">
              <img src={burj} alt="" />
              <h6>
                BURJ <br /> KHALIFA
              </h6>
              <p>9 Minutes</p>
            </div>
            <div className="prime-location-bottom-wrapper">
              <img src={mall} alt="" />
              <h6>
                DUBAI <br /> MALL
              </h6>
              <p>9 Minutes</p>
            </div>
            <div className="prime-location-bottom-wrapper">
              <img src={BEACHFRONT} alt="" />
              <h6>
                JUMEIRAH <br /> BEACH
              </h6>
              <p>18 Minutes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimeLocation;
