import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import frond from "../assets/frond.png";

const FloorPlanForm = ({ selectedName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("IN");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastUrlPart, setLastUrlPart] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [project_name, setProject_name] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUrl(window.location.href);
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
      project_name: selectedName,
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
        setName("");
        setEmail("");
        setCountryCode("IN");
        setPhone("");
        setProject_name("");
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
      <div className="img-cover">
        <img src={frond} alt="" />
      </div>
      <div className="cover-form">
        <div className="cover-form-wrapper">
          <div className="cover-form-box">
            <h3>Get the Brochure in one click</h3>
            <p className="color-white">
              Check your email after submitting contact details.
            </p>
            <div className="form-content-wrapper cover-form-points">
              <div className="form-before subtitle">Lifestyle </div>
              <div className="form-before subtitle">Payment Plan </div>
              <div className="form-before subtitle">Floor Plan </div>
              <div className="form-before subtitle">Location Information </div>
            </div>

            <div className="form-wrapper">
              <form onSubmit={handleSubmit} className="forms">
                <div className="wrapper">
                  <div className="inner-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="info">
                      <h4>FILL IN THE FORM</h4>
                      <div className="form-box">
                        <input
                          type="text"
                          placeholder="Name"
                          value={name}
                          pattern="[A-Za-z\s]+"
                          title="Name should only contain letters and spaces"
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email ID"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <PhoneInput
                          international
                          defaultCountry={countryCode}
                          value={phone}
                          onChange={(value) => {
                            if (value) {
                              const cleanedValue = value.replace(
                                /[^\d\s+]/g,
                                ""
                              );
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
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="cover-form-content">
            <div className="form-content-wrapper">
              <div className="form-before subtitle">Lifestyle </div>
              <div className="form-before subtitle">Payment Plan </div>
              <div className="form-before subtitle">Floor Plan </div>
              <div className="form-before subtitle">Location Information </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorPlanForm;