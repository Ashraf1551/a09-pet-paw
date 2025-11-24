import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import i1 from "../assets/1.avif";
import i2 from "../assets/2.png";
import i3 from "../assets/3.png";

const Slider = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={i1} className="w-full h-[600px] object-cover" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={i2} className="w-full h-[600px] object-cover" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={i3} className="w-full h-[600px] object-cover" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
