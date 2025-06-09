"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { ButtonLink } from "./ButtonLink";

export const Services = () => {
  const pathname = usePathname();
  const [isHomepage, setIsHomepage] = useState<boolean | false>(false);

  useEffect(() => {
    // Reset hover state when the route changes
    pathname == "/" ? setIsHomepage(true) : setIsHomepage(false);
  }, [pathname]);
  return (
    <div
      className={`services__container ${
        isHomepage && "mt-[-100px]"
      } bg-theme_black-900 relative z-30  `}
    >
      <div
        className={`${
          isHomepage && "hero__border__gradient"
        } absolute content-none bottom-[90%] w-full h-[30%] small:h-[50%]`}
      ></div>

      <section itemScope itemType="https://schema.org/CreativeWork">
        <div
          className={`${
            !isHomepage && "pt-[10rem]"
          } relative z-10 bg-theme_black-900 text-white pb-10 font-light tracking-wide px-[5%] small:px-layout-small max-w-screen-large mx-auto`}
        >
          <div className="">
            <motion.h2
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{
                bounce: 0,
              }}
              viewport={{ once: true }}
              className="uppercase pb-[4rem] small:pb-[6rem] mx-auto w-[100%] text-center small:text-left"
            >
              Services.
            </motion.h2>

            <div className="xsmall:flex flex-wrap justify-between">
              {services.map((service) => {
                return (
                  <motion.div
                    key={service.title}
                    className="md:grid my-4 py-4 grid-cols-4 max-w-[300px] xsmall:max-w-full mx-auto xsmall:mx-0 xsmall:w-[47%]"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      bounce: 0,
                      delay: 0.5,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="h-20 w-20 mb-[3rem] mx-auto small:ml-0 md:col-span-1 md:my-0 text-theme_peach-800 opacity-60">
                      {service.icon}
                    </div>
                    <div className="md:col-span-3 text-center mb-5 md:text-left">
                      <div className="h-10 mb-5 sm:mb-10 md:mb-14 lg:mb-8">
                        <h3 className="text-2xl tracking-wider min-h-[50px] text-theme_peach-900 uppercase pt-[0.5rem]">
                          {service.title}
                        </h3>
                      </div>
                      <div className="service-text text-xl tracking-wider leading-[1.6em] pt-[0.5rem] ">
                        <p className="mt-[1rem]">{service.intro}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <ButtonLink
            buttonText="Learn More"
            url="/services"
            aria="learn more about my services"
          />
        </div>
      </section>
    </div>
  );
};
