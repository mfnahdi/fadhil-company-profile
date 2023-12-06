"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        marginTop: "450px",
        marginLeft: "100px",
      }}
    >
      <Slider {...settings}>
        <div>
          <img src="/ffc.jpg" alt="Slide 1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="/fam.jpg" alt="Slide 2" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="/beyond.webp" alt="Slide 3" style={{ width: "100%" }} />
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
