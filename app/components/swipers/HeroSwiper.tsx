// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroImages } from "../../../lib/images";

import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";
import Image from "next/image";

export const HeroSwiper = () => {
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
      {heroImages.map((project) => (
        <SwiperSlide key={project.desktop.alt} className="relative pr-0">
          <div>
            <Image
              src={project.desktop.src}
              alt={project.desktop.alt}
              className={`${"desktop__img"} absolute top-0 left-0 w-full h-auto object-cover mix-blend-lighten opacity-80 shadow-[0px_0px_10px_1px] shadow-black`}
            />
            <Image
              src={project.mobile.src}
              alt={project.mobile.alt}
              className={`${"mobile__img"} absolute top-[5%] left-[-5%] w-[20%] h-auto object-cover shadow-[0px_0px_10px_1px] shadow-black`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
