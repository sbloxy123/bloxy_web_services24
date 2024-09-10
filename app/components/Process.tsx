"use client";
import React, { ReactNode } from "react";
// import "../css/myProcesses.css";

import { Call, Content, Rocket, Browser, Wireframe, Data } from "./Icons";

import { motion } from "framer-motion";

interface process {
  title: string;
  description: string;
  icon: ReactNode;
}

export const Process = () => {
  const processes: process[] = [
    {
      title: "1. Quick Chat",
      description:
        "I need 15 minutes to learn about your business goals and vision",
      icon: <Call fill="currentColor" />,
    },
    {
      title: "2. Content",
      description:
        "Once the plan is set, I'll outline exactly what I need from you to begin your site.",
      icon: <Content fill="currentColor" />,
    },

    {
      title: "3. Mockup",
      description:
        "I'll deliver wireframes and designs tailored to your brand and our discussed requirements.",
      icon: <Wireframe fill="currentColor" />,
    },
    {
      title: "4. Edits",
      description:
        "If you have changes, let's discuss them now—perfect timing for adjustments.",
      icon: <Browser fill="currentColor" />,
    },
    {
      title: "5. Develop",
      description:
        "Leave this to me! I'll use my expertise to craft an interactive, functional, and SEO-friendly site.",
      icon: <Data fill="currentColor" />,
    },
    {
      title: "6. Launch",
      description:
        "Launch time! See the impact of your custom website with Google Analytics insights.",
      icon: <Rocket fill="currentColor" />,
    },
  ];
  return (
    <section className="py-12 px-0 bg-theme_black-900 text-theme_white-900 h-[80%] font-light tracking-wide">
      <div className="relative px-[5%] py-[6rem] max-w-[1440px] small:px-layout-small small:mx-auto overflow-hidden small:overflow-visible">
        <div className="content-container">
          <motion.h2
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{
              bounce: 0,
            }}
            viewport={{ once: true }}
            className="pt-12 pb-4 uppercase m-auto w-[100%] tracking-widest font-extralight"
          >
            The Process.
          </motion.h2>

          <motion.h3
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{
              bounce: 0,
            }}
            viewport={{ once: true }}
            className="pb-12 w-[100%] tracking-widest font-extralight text-[1.4rem] max-w-[550px]"
          >
            6 key steps I take to ensure your website performs and looks exactly
            how you want it&nbsp;to.
          </motion.h3>

          <div className="sm:grid m-auto sm:grid-cols-2 md:grid-cols-3">
            {processes.map((step) => {
              return (
                <motion.div
                  key={step.title}
                  className="tab text-center m-8"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    bounce: 0,
                    delay: 0.5,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="h-[54px] w-[54px] m-6 mx-auto text-theme_peach-800">
                    {step.icon}
                  </div>

                  <h4 className="my-6 mx-0 text-2xl font-normal text-theme_peach-900">
                    {step.title}
                  </h4>
                  <p className="text-theme_white-900 max-w-[300px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
