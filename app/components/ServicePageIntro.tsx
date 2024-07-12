import { Branding } from "./Icons";
import { ServiceBox } from "./ServiceBox";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export const ServicePageIntro = () => {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 80 },
    animate: (index: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        bounce: 0,
      },
    }),
  };

  return (
    <section className="relative services__content bg-white">
      <div className="services__content__container px-[5%] pb-[4rem] small:px-layout-small small:flex small:max-w-[1440px] small:mx-auto">
        <div className="services__intro__text__container relative bg-white w-[100%] mx-auto translate-y-[-10rem] xsmall:mr-0 small:translate-y-[4rem] px-[3rem] small:pl-0 small:w-[50%] small:pr-[6rem] small:ml-0">
          <motion.p
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
            className="services__intro__text pt-[3rem] max-w-[550px] mx-auto small:ml-0"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim
            leo, pharetra id arcu convallis, euismod malesuada felis. Sed
            eleifend turpis tellus, et finibus dui semper sit amet. Etiam
            dignissim quam quis diam aliquet, ut congue ex lobortis. Donec erat
            sapien, venenatis id pretium non, ullamcorper a lacus.
          </motion.p>
          <motion.p
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
            className="services__intro__text pt-[3rem] max-w-[550px] mx-auto small:ml-0"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim
            leo, pharetra id arcu convallis, euismod malesuada felis. Sed
            eleifend turpis tellus, et finibus dui semper sit amet. Etiam
            dignissim quam quis diam aliquet, ut congue ex lobortis. Donec erat
            sapien, venenatis id pretium non, ullamcorper a lacus.
          </motion.p>
        </div>
        <div className="services__intro__text--line__hide"></div>
        <ul className="service__boxes grid grid-cols-1 gap-y-[2rem] gap-x-[3rem] xsmall:grid-cols-2 xsmall:ml-[-5%] small:translate-y-[-12rem] small:gap-x-0 small:w-full">
          {services.map(
            (service, index) =>
              service.showOnServicePage && (
                <ServiceBox
                  key={service.key}
                  intro={service.intro}
                  title={service.title}
                  icon={service.icon}
                  scroll__id={service.scroll__id}
                  index={index}
                />
              )
          )}
        </ul>
      </div>
    </section>
  );
};
