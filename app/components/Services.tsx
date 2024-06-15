"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import cms from "@/public/images/icons/Services/monitor.svg";
import design from "@/public/images/icons/Services/sketch.svg";
import branding from "@/public/images/icons/Services/branding.svg";
import seo from "@/public/images/icons/Services/seo-search-symbol.svg";
import support from "@/public/images/icons/Services/support.svg";
import code from "@/public/images/icons/Services/code.svg";

interface Service {
  title: string;
  description: string;
  icon: string;
}

export const Services = () => {
  const services: Service[] = [
    {
      title: "Development",
      description:
        "By using modern technologies, I'm able to build fast and interactive sites that your audience will enjoy visiting. Nobody likes to visit a clunky, slow website and it can be detrimental you your business.",
      icon: code,
    },
    {
      title: "CMS (Content Management Service) integration",
      description:
        "CMSs offer a fantastic way to manage your content by yourself. You've likely heard of Wordpress?.. this is a CMS. I can integrate a number of these great services such as Sanity, Strapi and Wordpress to your website - all providing excellent performance results.",
      icon: cms,
    },

    {
      title: "Design",
      description:
        "Website design is an important part of your online presence. The design is the first thing your audience will see and it provides them with an insight into how you view them as a customer and how much they can trust you.",
      icon: design,
    },
    {
      title: "SEO",
      description:
        "A website sitting higher in Search Engine results is a great way to bring in warm leads from people searching for terms that directly relate to your business.",
      icon: seo,
    },
    {
      title: "Branding & Marketing",
      description:
        "You might want to think about branding your email templates, leaflets, business cards etc to match with your new website.",
      icon: branding,
    },
    {
      title: "Support & Hosting",
      description:
        "Choosing the right hosting platform can be complicated so I can recommend where to host your site to provide you with reliability and performance. Once you're happy with your new site you're good to go. For a small retainer, I can provide you with ongoing support.",
      icon: support,
    },
  ];

  return (
    <div className="services__container bg-theme_black-900 relative z-30 mt-[-100px] small:mt-0">
      <div className="hero__border__gradient absolute content-none bottom-[90%] w-full h-[30%] small:h-[60%]"></div>

      <section itemScope itemType="https://schema.org/CreativeWork">
        <div className="relative z-10 bg-theme_black-900 text-white pb-10 font-light tracking-wide px-[5%] small:px-layout-small">
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
                    <Image
                      className="md:col-span-1 h-20 w-20 md:my-0 mb-[3rem] mx-auto small:ml-0"
                      alt={service.title}
                      src={service.icon}
                      width={100}
                      height={100}
                    />
                    <div className="md:col-span-3 text-center mb-5 md:text-left">
                      <div className="h-10 mb-5 sm:mb-10 md:mb-14 lg:mb-8">
                        <h3 className="text-2xl tracking-wider min-h-[50px]">
                          {service.title}
                        </h3>
                      </div>
                      <div className="service-text text-xl tracking-wider leading-[1.6em] pt-[0.5rem]">
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
