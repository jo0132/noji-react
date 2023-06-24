import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/css/effect-fade";

function Introslider() {
  return (
    <div className="intro__slider__inner">
      <h2 className="blind">이미지 슬라이더</h2>

      <div className="intro__slider__img">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          spaceBetween={30}
          effect={"fade"}
          className="mySwiper"
          modules={[EffectFade, Autoplay]}
        >
          <SwiperSlide>
            <img
              src="./assets/images/intro/intro_slider_img01.jpg"
              alt="인트로 슬라이드 이미지1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/images/intro/intro_slider_img02.jpg"
              alt="인트로 슬라이드 이미지2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/images/intro/intro_slider_img03.jpg"
              alt="인트로 슬라이드 이미지3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Introslider;
