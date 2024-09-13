// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroImages } from "../../../lib/images";

import { Autoplay, EffectFade, Navigation } from "swiper/modules";
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
      modules={[Autoplay, EffectFade, Navigation]}
      autoplay={{ delay: 10000, stopOnLastSlide: false }}
      effect={"fade"} // or 'slide'
      watchSlidesProgress={true}
      navigation={{
        prevEl: ".prev__screenshot",
        nextEl: ".next__screenshot",
      }}
    >
      {heroImages.map((project) => (
        <SwiperSlide key={project.desktop.alt} className="relative pr-0">
          <div>
            <Image
              src={project.desktop.src}
              alt={project.desktop.alt}
              loading="eager"
              priority
              className={`${"desktop__img"} absolute top-0 left-0 w-full h-auto object-cover mix-blend-lighten  shadow-[0px_0px_10px_1px] shadow-black`}
            />
            <Image
              src={project.mobile.src}
              alt={project.mobile.alt}
              loading="eager"
              priority
              className={`${"mobile__img"} absolute top-[5%] left-[-5%] w-[20%] h-auto object-cover shadow-[0px_0px_10px_1px] shadow-black`}
            />
          </div>
        </SwiperSlide>
      ))}
      <div className="next__screenshot absolute right-0 heroNavCustom:right-[-50px] mt-[-50px] heroNavCustom:mt-0 top-0 w-[4.4rem] h-[4.4rem] flex justify-center items-center rounded-md bg-theme_peach-900 z-10">
        <span className="block w-[1.6rem] h-[1.6rem] rotate-180">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
              fill="#1D1B20"
            />
          </svg>
        </span>
      </div>
      <div className="prev__screenshot absolute heroNavCustom:right-[-50px] right-[50px] mt-[-50px] heroNavCustom:mt-[50px] top-0 w-[4.4rem] h-[4.4rem] flex justify-center items-center rounded-md bg-theme_peach-900">
        <span className="block w-[1.6rem] h-[1.6rem]">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
              fill="#1D1B20"
            />
          </svg>
        </span>
      </div>
    </Swiper>
  );
};
