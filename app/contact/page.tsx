"use client";

// import ContactForm from "../components/ContactForm";
import ContactFormNew from "../components/ContactFormNew";
import { ScrollArrow } from "../components/global/ScrollArrow";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="">
      <ScrollArrow />
      <section className="services__hero bg-theme_peach-900 relative h-[45vh] xsmall:h-[35vh] small:h-[48vh]">
        <div className="absolute top-0 bottom-0 left-0 right-0 mx-[5%] small:mx-layout-small medium:mx-auto">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{
              bounce: 0,
            }}
            viewport={{ once: true }}
            className="about__hero__text absolute top-0 bottom-0 left-0 right-0 pb-[2rem] flex flex-col justify-center items-start mt-[-15rem] medium:pl-layout-small max-w-screen-large mx-auto"
          >
            <h1 className="text-theme_black-900 text-left xsmall:ml-0 ">
              Services.
            </h1>
            <p className="capitalize tracking-[0.2rem] text-[1.8rem] text-theme_black-900">
              Let&apos;s chat!
            </p>
          </motion.div>
        </div>
      </section>
      <ContactFormNew />
    </main>
  );
}
