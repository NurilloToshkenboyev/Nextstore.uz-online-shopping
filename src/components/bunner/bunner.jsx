import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export const Bunner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="carousel-image" src="Carusel1.png" alt="img" />
        </div>
        <div>
          <img className="carousel-image" src="Carusel2.png" alt="img" />
        </div>
        <div>
          <img className="carousel-image" src="Carusel1.png" alt="img" />
        </div>
        <div>
          <img className="carousel-image" src="Carusel2.png" alt="img" />
        </div>
      </Slider>
    </div>
  );
};
