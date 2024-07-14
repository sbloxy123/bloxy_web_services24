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
            From initial design to ongoing maintenance, I provide comprehensive
            solutions that streamline operations and bolster your digital
            strategy. My approach integrates advanced tools to enhance both the
            aesthetics and functionality of your website, backed by data-driven
            insights to optimise performance and engagement.
          </motion.p>
          <motion.p
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
            className="services__intro__text pt-[3rem] max-w-[550px] mx-auto small:ml-0"
          >
            As an integral part of your team, I am committed to enhancing your
            online presence and driving your business&apos;s success. My
            expertise spans a broad range of web development services, tailored
            to meet the unique needs of each client. By utilizing cutting-edge
            technologies like Next.js, I ensure that your website is not only
            fast and SEO-friendly but also stands out to the right audience.
          </motion.p>
          <motion.p
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={3}
            className="services__intro__text pt-[3rem] max-w-[550px] mx-auto small:ml-0"
          >
            My aim is to strengthen your brand identity and align marketing
            efforts with your goals, while providing secure, efficient hosting
            and support to ensure your website stays technologically advanced.
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
