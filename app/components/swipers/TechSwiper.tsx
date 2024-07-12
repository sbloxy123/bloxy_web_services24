// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";

export const TechSwiper = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="hero__swiper w-full h-full overflow-visible"
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 10000, stopOnLastSlide: false }}
      effect={"fade"} // or 'slide'
    >
      <h1>hello</h1>
    </Swiper>
  );
};
