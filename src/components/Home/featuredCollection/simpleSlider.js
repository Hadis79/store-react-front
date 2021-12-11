import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featuredCollection.modules.css";

const SimpleSlider = ({ data }) => {
  console.log("popularData", data);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div className="slider-container">
              <img src={item.image} alt="image" />
              <p>
                <i class="fa fa-shopping-cart"></i> {`$${item.price}`}
              </p>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default SimpleSlider;
