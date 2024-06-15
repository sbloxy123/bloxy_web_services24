import { HeroSwiper } from "./swipers/HeroSwiper";

const Hero = () => {
  return (
    <div className="hero mt-[0]">
      <div className="hero__media mb-[20rem] small:mb-0">
        <video
          width="1440"
          height="900"
          autoPlay
          muted
          playsInline
          loop
          preload="none"
        >
          <source src="/videos/hero-vid.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero__content mt-[3rem] absolute top-[20%] left-0 w-full h-full small:top-0 small:flex small:justify-between small:gap-[7rem] small:items-center">
        <div className="hero__text flex flex-col items-start justify-center max-w-[625px] z-20 mx-auto px-[5%] small:ml-0 small:pl-layout-small small:pr-0">
          <h1 className="text-white font-sans text-center mx-auto text-[2.4rem] font-semibold w-full max-w-[500px] small:ml-0 small:text-left tracking-wider">
            Freelance Web Developer crafting fast, fluid and high performing
            websites
          </h1>
          <p className="text-white text-[1.4rem] mt-[2rem] max-w-[500px] text-center mx-auto leading-[1.8em] small:max-w-[600px] small:ml-0 small:text-left">
            Building high quality and effective websites using the latest web
            technologies to principles to excel client online prescence against
            their competition
          </p>
        </div>
        <div className="hero__image z-20 px-[5%] mx-auto mt-[15%] small:mx-0 small:mt-[22%] w-[93%] h-full max-w-[clamp(560px,70vw,700px)] align-middle translate-x-[2%] small:max-w-[clamp(300px,50vw,720px)] small:w-full small:translate-x-[5%] small:px-0">
          <HeroSwiper />
        </div>
      </div>
    </div>
  );
};

export default Hero;
