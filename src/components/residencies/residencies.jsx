import React from "react";
import "./residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <div className="R-wrapper">
      <div className="paddings innerWidth R-container">
        <span className="R-disc flexColStart ">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </span>
        <Swiper {...sliderSettings} style={{ overflow: "visible" }}>
          <Rbutton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt={card.name} />
                <span className="secondaryText r-price">
                  <span>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText"> {card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;
const Rbutton = () => {
  const swiper = useSwiper();
  return (
    <div className=" padding flexCenter  rbutton">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
