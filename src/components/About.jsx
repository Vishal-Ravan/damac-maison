import React from "react";
import about from "../assets/galnin.jpg";
import Popup from "reactjs-popup";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="container mtt">
          <div className="about ">
            <div className="about-image">
              <Popup trigger={<img src={about} alt="" />} modal nested>
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="popup-img">
                      <img src={about} alt="" />
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="about-content dark">
              <div className="subtitle">About the project</div>
              <h2 className="title">Luxury Living at Its Finest!</h2>
              <p>
                This exquisite mid-floor residence offers a breathtaking view of
                the iconic Burj Khalifa, spanning 703 sq.ft. Featuring 2
                washrooms, 1 balcony, and direct access to the Business Bay Walk
                & Canal, this property seamlessly blends convenience and luxury.
                Experience the pinnacle of comfort and elegance at DAMAC Maison
                Canal Views. Contact us now to make this your new home and
                embrace a lifestyle that epitomizes Dubai's urban living.
              </p>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
};

export default About;
