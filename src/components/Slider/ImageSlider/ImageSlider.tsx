import React from "react";
import "./ImageSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderImages } from "./ImageSliderUtils";

const ImageSlider = () => {
  const settings = {
    dots: true,
    accessibility: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 700,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "100px",
  };
  return (
    <div>
      <Slider className="imageSlider" {...settings}>
        {sliderImages.map(image => (
          <div className="slider__container" key={image.id}>
            <div className="slider__imgContainer raya encanto  luca">
              <img className="slider__img" src={image.url} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
