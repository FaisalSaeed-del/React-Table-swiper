import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./App.css";
import R1 from "../src/images/reward1.png";
import R2 from "../src/images/reward2.png";

const App = () => {
  SwiperCore.use([EffectCoverflow, Pagination]);

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={R1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={R1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={R1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={R2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={R2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={R2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={R2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={R2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={R2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
