import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import R1 from "../src/images/reward1.png";
import R2 from "../src/images/reward2.png";

const App = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
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
