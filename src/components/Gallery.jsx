import React from "react";
import Slider from "react-slick";
import gal from "../assets/ga.jpg";
import gall from "../assets/g.jpg";
import g from "../assets/galf.jpg";
import ga from "../assets/gals.jpg";
import gb from "../assets/galth.jpg";
import gd from "../assets/galfiv.jpg";
import ge from "../assets/galsix.jpg";
import galsev from "../assets/galsev.jpg";
import galeig from "../assets/galeig.jpg";
import galnin from "../assets/galnin.jpg";
import galten from "../assets/galten.jpg";
import galelv from "../assets/galelv.jpg";
import galtw from "../assets/galtw.jpg";
import galthirt from "../assets/galthirt.jpg";
import galfort from "../assets/galfort.jpg";
import galfifteen from "../assets/galfifteen.jpg";
import galsxteen from "../assets/galsxteen.jpg";
import galseventeen from "../assets/galseventeen.jpg";

const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-arrow-button" onClick={onClick}>
    <span>&lt; </span>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-arrow-buttons" onClick={onClick}>
    <span> &gt;</span>
  </button>
);

const Gallery = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={gal} />
        </div>
        <div>
          <img src={gall} />
        </div>
        <div>
          <img src={g} />
        </div>
        <div>
          <img src={ga} />
        </div>
        <div>
          <img src={gb} />
        </div>
        <div>
          <img src={gd} />
        </div>
        <div>
          <img src={ge} />
        </div>
        <div>
          <img src={galsev} />
        </div>
        <div>
          <img src={galeig} />
        </div>
        <div>
          <img src={galnin} />
        </div>
        <div>
          <img src={galten} />
        </div>
        <div>
          <img src={galelv} />
        </div>
        <div>
          <img src={galtw} />
        </div>
        <div>
          <img src={galthirt} />
        </div>
        <div>
          <img src={galfort} />
        </div>
        <div>
          <img src={galfifteen} />
        </div>
        <div>
          <img src={galsxteen} />
        </div>
        <div>
          <img src={galseventeen} />
        </div>
      </Slider>
    </>
  );
};

export default Gallery;
