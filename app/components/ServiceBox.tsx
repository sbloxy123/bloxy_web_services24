import { ReactNode } from "react";
import { motion } from "framer-motion";

export const ServiceBox = ({
  title,
  intro,
  icon,
  scroll__id,
  index,
}: {
  title: string;
  intro: string;
  icon: ReactNode;
  scroll__id?: string;
  index: number;
}) => {
  const fadeInAnimationVariants = {
    initial: { opacity: 0 },
    animate: (index: any) => ({
      opacity: 1,
      transition: {
        delay: 0.35 * index,
      },
    }),
  };
  return (
    <motion.li
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="service__box w-[90%] xsmall:w-[98%] aspect-square bg-white px-[5%] py-[15%] mx-auto gap-[1rem] shadow-xl  xsmall:mx-0 small:max-w-[360px] xsmall:py-[5%] small:aspect-square "
    >
      <a href={scroll__id} className="w-full h-full flex justify-end flex-col">
        <div className="overflow-hidden">
          <div className="service__box--icon w-[54px] h-auto text-theme_dark_orange-900">
            {icon}
          </div>
          <h4 className="service__box--title font-normal py-[1rem]">{title}</h4>
          <p className="service__box--intro">{intro}</p>
        </div>
        <span className="service__box--arrow mb-[-8%] text-[4rem] text-theme_dark_brown-900">
          →
        </span>
      </a>
    </motion.li>
  );
};
