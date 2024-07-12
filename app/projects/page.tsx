"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Projects } from "../components/Projects";
import { ScrollArrow } from "../components/global/ScrollArrow";
import headerImage from "@/public/images/site/laptop.png";

export default function ProjectsPage() {
  return (
    <main className="">
      <ScrollArrow />

      <section className="projects__hero bg-theme_peach-900 relative h-[45vh] xsmall:h-[35vh] small:h-[48vh]">
        <div className="absolute top-0 bottom-0 left-0 right-0 mx-[5%] small:mx-layout-small medium:mx-auto">
          <div className="about__hero__text absolute top-0 bottom-0 left-0 right-0 pb-[2rem] flex flex-col justify-center items-start mt-[-15rem] medium:px-layout-small max-w-screen-large mx-auto">
            <h1 className="text-theme_black-900 text-left xsmall:ml-0 ">
              Projects.
            </h1>
            <p className="capitalize tracking-[0.2rem] text-[1.8rem] text-theme_black-900">
              Placeholder text
            </p>
          </div>
          <div className="projects__header__image--container absolute bottom-0 left-0 right-0 mx-auto max-w-screen-lg ">
            <div className="projects__header__image absolute bottom-0 right-0 w-[clamp(300px,30vw,500px)] h-auto">
              <Image
                src={headerImage}
                alt="screenshot of drmould.co.uk in laptop and phone placeholder"
                className="object-contain mb-[-1px]"
                width={560}
                height={311}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="quotes bg-theme_black-900">
        <div className=" px-[5%] small:px-layout-small  mx-auto py-[10rem]">
          <div className="text-theme_peach-900  text-center font-sans max-w-[93rem] mx-auto">
            <p className="quote__text relative text-[2.2rem] leading-[1.5em]">
              <span className="text-[50rem] opacity-[0.1] absolute top-[-0%] left-[-45%] translate-y-[500%]">
                〝
              </span>
              <span className="italic">
                Stuart was very professional and passionate about supporting our
                business and our aim to increase traffic and generate more
                leads. We tried to push the boundaries with the design of our
                website and Stuart exceeded our expectations with a streamlined
                editor [Sanity.io] for managing all the content ourselves
              </span>
              <span className="text-[50rem] opacity-[0.1] absolute bottom-[-60%] right-[-45%] translate-y-[300%]">
                〞
              </span>
            </p>
            <p className="quotee mt-[2.5rem] text-[2rem] leading-[1.5em] tracking-widest">
              ROSS NEWHAM, <span className="font-normal">ROSCO & PERLINI</span>
            </p>
          </div>
        </div>
      </section>

      <section className="projects__section bg-theme_black-900 mt-[-2px]">
        <div className=" relative px-[5%] small:px-layout-small max-w-screen-large mx-auto">
          <Projects />
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
