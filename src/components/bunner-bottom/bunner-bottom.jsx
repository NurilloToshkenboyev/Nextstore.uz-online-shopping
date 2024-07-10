import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "linear-gradient(270deg, #4d5ef6 0%, #f64d4d 100%)",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "linear-gradient(270deg, #4d5ef6 0%, #f64d4d 100%)",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}

export const BunnerBottom = () => {
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
          <img
            className="rounded-[20px] w-full "
            src="Carusel2.png"
            alt="img"
          />
        </div>
        <div>
          <img
            className="rounded-[20px] w-full "
            src="Carusel1.png"
            alt="img"
          />
        </div>
        <div>
          <img
            className="rounded-[20px] w-full "
            src="Carusel2.png"
            alt="img"
          />
        </div>
      </Slider>
    </div>
  );
};