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
        "I need about 15 minutes of your time to learn more about your business and where you want to take it",
      icon: <Call fill="currentColor" />,
    },
    {
      title: "2. Content",
      description:
        "Once a plan is in place, I will explain the details of what I need to get started on your site",
      icon: <Content fill="currentColor" />,
    },

    {
      title: "3. Mockup",
      description:
        "I provide you with wireframes and designs to fit your company branding and requirements we have discussed",
      icon: <Wireframe fill="currentColor" />,
    },
    {
      title: "4. Edits",
      description:
        "If you want to make any changes, now is a perfect time to have another chat",
      icon: <Browser fill="currentColor" />,
    },
    {
      title: "5. Develop",
      description:
        "Leave this bit with me! This is the part where I use my expertise to make the site interactive, functional and SEO friendly",
      icon: <Data fill="currentColor" />,
    },
    {
      title: "6. Launch",
      description:
        "Time to start seeing what a difference a custom website can make!",
      icon: <Rocket fill="currentColor" />,
    },
  ];
  return (
    <section className="py-12 px-0 bg-theme_black-900 text-theme_white-900 h-[80%] font-light tracking-wide">
      <div className="relative px-[5%] py-[6rem] max-w-[1440px] small:px-layout-small small:mx-auto ">
        <div className="content-container">
          <motion.h2
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{
              bounce: 0,
            }}
            viewport={{ once: true }}
            className="py-12 pb-6 uppercase m-auto w-[100%] tracking-widest font-extralight"
          >
            The Process.
          </motion.h2>
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
                  <div className="h-[54px] w-[54px] m-6 mx-auto">
                    {step.icon}
                  </div>

                  <h4 className="my-6 mx-0 text-2xl font-normal">
                    {step.title}
                  </h4>
                  <p className="text-theme_white-900">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
