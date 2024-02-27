import { FiPhoneCall } from "react-icons/fi";
import { TiDocument } from "react-icons/ti";
import { AiOutlineHome } from "react-icons/ai";
import { TbMessageCircleQuestion } from "react-icons/tb";

import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("IN");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastUrlPart, setLastUrlPart] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUrl(window.location.href);
    // console.log("Current URL:", currentUrl);
    const urlParts = currentUrl.split("/");
    const newLastUrlPart = urlParts[urlParts.length - 1];
    setLastUrlPart(newLastUrlPart);
  }, [currentUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }
    if (
      phone.replace(/\D/g, "").length < 7 ||
      phone.replace(/\D/g, "").length > 15
    ) {
      alert("Phone number should have between 7 and 15 digits.");
      return;
    }

    setIsSubmitting(true);

    const data = {
      name: name,
      email: email,
      code: countryCode,
      phone: phone,
      agent_email: "manav@propdub.com",
      url: currentUrl, 
    };

    try {
      const response = await fetch(
        "https://propdubapi.warburttons.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        navigate(`/thank-you/${lastUrlPart}`);
        // navigate(`/thank-you`);
        // console.log(name, countryCode, email, phone, "Data sent successfully!");
        setName("");
        setEmail("");
        setCountryCode("IN");
        setPhone("");
      } else {
        console.error("Failed to send data to the API");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="pt">
        <div className="footer-bg">
          <div className="overlay-footer"></div>
          <div className="container">
            <div className="footer-wrapper">
              <div className="footer-head">
                <h2>GET CONSULTATION</h2>
              </div>
              <div className="footer-form">
                <div className="footer-form-left">
                  <div className="footer-form-left-content">
                    <FiPhoneCall />
                    <p>Earliest convenience</p>
                  </div>
                  <div className="footer-form-left-content">
                    <TbMessageCircleQuestion />
                    <p>Any question</p>
                  </div>
                  <div className="footer-form-left-content">
                    <TiDocument />
                    <p>
                      Any document (prices, brochure, payment plan , floor
                      plans)
                    </p>
                  </div>
                  <div className="footer-form-left-content">
                    <AiOutlineHome />
                    <p>Ready for your next new home?</p>
                  </div>
                </div>
                <div className="footer-form-right">
                  <div className="footer-form-right-form">
                    <h3>Request a call</h3>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        pattern="[A-Za-z\s]+" // Use a pattern to allow letters and spaces
                        title="Name should only contain letters and spaces"
                        onChange={(e) => setName(e.target.value)}
                        required // Make this field required
                      />
                      <input
                        type="email" // Set the input type to "email"
                        placeholder="Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required // Make this field required
                      />
                      {/* <PhoneInput
                          international
                          defaultCountry={countryCode}
                          value={phone}
                          onChange={setPhone}
                          required
                          onCountryChange={(selectedCountry) =>
                            setCountryCode(selectedCountry)
                          }
                        /> */}
                      <PhoneInput
                        international
                        defaultCountry={countryCode}
                        value={phone}
                        onChange={(value) => {
                          // Check if value is defined before applying the regex
                          if (value) {
                            // Use a regex pattern to remove any non-numeric characters
                            const cleanedValue = value.replace(/[^\d\s+]/g, "");
                            setPhone(cleanedValue);
                          }
                        }}
                        required
                        onCountryChange={(selectedCountry) =>
                          setCountryCode(selectedCountry)
                        }
                      />
                      <button
                        className="senda"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Send"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
