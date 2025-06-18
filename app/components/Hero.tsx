"use client";
import Image from "next/image";
import { HeroSwiper } from "./swipers/HeroSwiper";

const Hero = () => {
  return (
    <div className="hero mt-[0]">
      <div className="hero__media mb-[30rem] ">
        <video
          width="1440"
          height="900"
          autoPlay
          muted
          playsInline
          loop
          preload="none"
        >
          <source
            src="https://res.cloudinary.com/ddthn74qt/video/upload/v1718470873/hero-vid_kbo8un.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="hero__content mt-[3rem] absolute top-[20%] left-0 w-full h-full ">
        <div className="hero__content__container w-full h-full  max-w-screen-large mx-auto">
          <div className="hero__text flex flex-col items-start justify-center max-w-[625px] z-20 mx-auto px-[5%] small:px-0">
            <div className="block w-[100px] mx-auto mb-[2rem]">
              <Image
                alt="logo"
                src="/images/icons/logo.svg"
                className=" w-full object-contain"
                height={100}
                width={100}
              />
            </div>
            <h1 className="text-white font-sans text-center mx-auto text-[clamp(2rem,4.3cqw,2.8rem)] font-semibold w-full max-w-[500px] tracking-wider text-balance">
              Designing and developing websites as a freelance partner to
              ambitious businesses.
            </h1>
            <p className="text-white text-[1.4rem] mt-[2rem] max-w-[600px] text-center mx-auto leading-[1.8em] text-balance">
              I collaborate with businesses to design and develop bespoke sites
              that are as functional as they are beautiful. Using the latest web
              technologies and best practices, I create high-quality solutions
              that elevate your online presence and help you stand out from the
              competition.
            </p>
          </div>
          <div className="hero__image z-20 px-[5%] mx-auto mt-[25%] xsmall:mt-[clamp(5rem,30vw,9rem)] small:mx-auto small:mt-[5rem] w-[93%] h-full max-w-[clamp(560px,70vw,700px)] align-middle translate-x-[2%]">
            <HeroSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
