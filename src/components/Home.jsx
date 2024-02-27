import React, { useState } from "react";
import Banner from "./Banner";
import About from "./About";
import Features from "./Features";
import AminitiesFeature from "./AminitiesFeature";
import Accordions from "./Accordions";
import Configrautions from "./Configrautions";
import RequestForm from "./RequestForm";
import Footer from "./Footer";
import Sliders from "./Sliders";
import { useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Modal from "react-responsive-modal";
import Popupform from "./Popupform";
import PrimeLocation from "./PrimeLocation";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onOpenModal();
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <Popupform />
      </Modal>
      <section id="">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <Features />
      <section id="amenities" className="mtt">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <AminitiesFeature />
        </AnimationOnScroll>
      </section>
      <section id="location">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <PrimeLocation />
        </AnimationOnScroll>
      </section>
      <section id="gallery">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <Sliders />
        </AnimationOnScroll>
      </section>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Accordions />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <Configrautions />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <RequestForm />
      </AnimationOnScroll>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
};

export default Home;
