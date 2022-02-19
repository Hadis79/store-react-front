import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featuredCollection.modules.css";

const SimpleSlider = ({ data }) => {
  console.log("popularData", data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <section>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div key={item.id} className="slider-container">
              <img src={item.image} alt="slider pic" />
              <p>
                <i className="fa fa-shopping-cart"></i> {`$${item.price}`}
              </p>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default SimpleSlider;
