import React, { Component } from "react";
import Slider from "react-slick";

export default class HomeTextSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <h3>Smart But Casual</h3>
            <p>Start your shopping here...</p>
          </div>
          <div>
            <h3>Shop Online</h3>
            <p>Start your shopping here...</p>
          </div>
          <div>
            <h3>Pack your Bag </h3>
            <p>Start your shopping here...</p>
          </div>
        </Slider>
      </div>
    );
  }
}
