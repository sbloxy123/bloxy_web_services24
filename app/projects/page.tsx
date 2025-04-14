"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Projects } from "../components/Projects";
import { ScrollArrow } from "../components/global/ScrollArrow";
import headerImage from "@/public/images/site/laptop.png";
import ContactFormNew from "../components/ContactFormNew";

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
              <span className="open__quote w-[20rem] opacity-5 h-auto flip-x opacity-1 absolute top-0 left-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 46.195 46.195"
                  width="100%"
                  height="100%"
                >
                  <path
                    style={{ fill: "#fff" }}
                    d="M35.765 8.264c-5.898 0-10.555 4.782-10.555 10.68s4.844 10.68 10.742 10.68c.059 0 .148-.008.207-.009-2.332 1.857-5.261 2.976-8.467 2.976-1.475 0-2.662 1.196-2.662 2.67s.949 2.67 2.424 2.67c10.469-.001 18.741-8.518 18.741-18.987v-.007c0-5.895-4.534-10.673-10.43-10.673zM10.75 8.264C4.852 8.264.187 13.046.187 18.944s4.84 10.68 10.739 10.68c.059 0 .146-.008.205-.009-2.332 1.857-5.262 2.976-8.468 2.976-1.475 0-2.663 1.196-2.663 2.67s.964 2.67 2.439 2.67c10.469-.001 18.756-8.518 18.756-18.987v-.007c0-5.895-4.549-10.673-10.445-10.673z"
                  />
                </svg>
              </span>
              <span className="italic">
                Stuart was great to work with. He genuinely cared about helping
                our business grow and attract more customers. We wanted our
                website to stand out against our competitors, and Stuart went
                above and beyond. We&apos;re particularly impressed with how
                easy it is now to update our website by ourselves, thanks to the
                editor [Sanity.io] he set up for us. We continue to use
                Stuart&apos;s services for updates and adding features.
              </span>
              <span className="close__quote w-[20rem] opacity-5 h-auto flip-x opacity-1 absolute bottom-0 right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 46.195 46.195"
                  width="100%"
                  height="100%"
                >
                  <path
                    style={{ fill: "#fff" }}
                    d="M35.765 8.264c-5.898 0-10.555 4.782-10.555 10.68s4.844 10.68 10.742 10.68c.059 0 .148-.008.207-.009-2.332 1.857-5.261 2.976-8.467 2.976-1.475 0-2.662 1.196-2.662 2.67s.949 2.67 2.424 2.67c10.469-.001 18.741-8.518 18.741-18.987v-.007c0-5.895-4.534-10.673-10.43-10.673zM10.75 8.264C4.852 8.264.187 13.046.187 18.944s4.84 10.68 10.739 10.68c.059 0 .146-.008.205-.009-2.332 1.857-5.262 2.976-8.468 2.976-1.475 0-2.663 1.196-2.663 2.67s.964 2.67 2.439 2.67c10.469-.001 18.756-8.518 18.756-18.987v-.007c0-5.895-4.549-10.673-10.445-10.673z"
                  />
                </svg>
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

      <ContactFormNew />
    </main>
  );
}
