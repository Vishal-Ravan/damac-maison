import React, { useState } from "react";
import profile from "../assets/profile.jpeg";
import "react-phone-number-input/style.css";
import Popup from "reactjs-popup";
import Modal from "react-responsive-modal";
import CallWhatsapp from "./CallWhatsapp";

const RequestForm = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="container mtt">
      <div className="request">
        <div className="request-left">
          <div className="request-left-img">
            <Popup
              trigger={<img className="cursor-point" src={profile} alt="" />}
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="popup-img">
                    <img src={profile} alt="" />
                  </div>
                </div>
              )}
            </Popup>

            <div>
              <h3>Manav</h3>
              <p>Property Consultant</p>
              <p>
                Email ID : <a href="mailto:manav@propdub.com" class="main-color-white">
                   manav@propdub.com
                </a>
              </p>
              <p>
                Phone No. :
                <a href="https://2ly.link/1vLKk" target="_blank" class="main-color-white">
                  +971504686212
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="right-request">
          <p>
            Meet Manav, an esteemed property consultant celebrated for his
            mastery in luxury real estate. Drawing upon extensive experience and
            a discerning sense of sophistication, Manav brings a unique flair to
            each client interaction. His profound insight into the intricacies
            of upscale living ensures each transaction is orchestrated with
            utmost precision and elegance. Whether in search of a grandiose
            abode or a refined property, Manav's commitment lies in crafting
            experiences that define opulence and refinement for his discerning
            clientele.
          </p>
        </div>
      </div>
      <div className="callback-box">
        <button className="requestcall mt " onClick={onOpenModal} >
          Request a call back
        </button>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
           <CallWhatsapp/>
          </Modal>
    </div>
  );
};

export default RequestForm;
