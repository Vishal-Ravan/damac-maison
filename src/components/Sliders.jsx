import React from "react";
import ga from "../assets/ga.jpg";
import g from "../assets/g.jpg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import galf from "../assets/galf.jpg";
import Gallery from "./Gallery";

const Sliders = () => {
  return (
    <div className="container mtt">
      <div className="slider-landing-section">
        <h2>Gallery</h2>
      </div>
      <div className="slider-landing">
        <div className="slider-left cursor-point">
          <Popup trigger={<img src={g} alt="" />} modal nested>
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <Gallery />
              </div>
            )}
          </Popup>
        </div>
        <div className="slider-right cursor-point">
          <div>
            <Popup trigger={<img src={ga} alt="" />} modal nested>
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <Gallery />
                </div>
              )}
            </Popup>
          </div>
          <div>
            <div className="slider-overlay cursor-point">
              <div className="image-overlay">
                <Popup trigger={<h4>3 +</h4>} modal nested>
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <Gallery />
                    </div>
                  )}
                </Popup>
                <img src={galf} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sliders;
