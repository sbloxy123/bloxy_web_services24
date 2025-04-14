"use client";

import Image from "next/image";
import me from "@/public/images/site/me.jpg";
import { motion } from "framer-motion";
// import ContactForm from "../components/ContactForm";
import WhyNext from "../components/WhyNext";
import { ScrollArrow } from "../components/global/ScrollArrow";
import { Services } from "../components/Services";
import ContactFormNew from "../components/ContactFormNew";

export default function About() {
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

  const questionList = [
    {
      key: 1,
      text: "▸ What is Next.js and why should you consider it?",
      href: "#what__is__next__js",
    },
    {
      key: 2,
      text: "▸ Why are Next.js websites so fast?",
      href: "#next__js__speed",
    },
    {
      key: 3,
      text: "▸ The importance of owning a fast website!",
      href: "#The__importance__of__owning__a__fast__website",
    },
    {
      key: 4,
      text: "▸ Already have a Wordpress website?",
      href: "#Already__have__a__Wordpress__website",
    },
    {
      key: 5,
      text: "▸ How about e-commerce websites?",
      href: "#How about e-commerce websites",
    },
  ];

  return (
    <main className="">
      <ScrollArrow />

      <section className="about__hero bg-theme_peach-900 relative h-[45vh] xsmall:h-[35vh] small:h-[48vh]">
        <div className="absolute top-0 bottom-0 left-0 right-0 mx-[5%] small:mx-layout-small medium:mx-auto">
          <div className="about__hero__text absolute top-0 bottom-0 left-0 right-0 pb-[2rem] flex flex-col justify-center items-start mt-[-15rem] medium:pl-layout-small max-w-screen-large mx-auto">
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{
                bounce: 0,
              }}
              viewport={{ once: true }}
            >
              <h1 className="text-theme_black-900 text-left xsmall:ml-0 ">
                About.
              </h1>
              <p className="capitalize tracking-[0.2rem] text-[1.8rem]">
                What I do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="intro__text text-center px-[5%] my-[4rem] xsmall:text-left small:px-layout-small max-w-screen-large mx-auto">
        <div className="about__intro__first relative flex flex-col-reverse gap-[5rem] mt-[-20rem] mb-[1.4rem] xsmall:mb-[2.4rem]">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              bounce: 0,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            itemProp="about"
            className="intro__first__para small:pt-0 pb-0"
          >
            <span className="font-normal text-[1.6rem]">
              Hello! I&apos;m Stuart Bloxham.
            </span>{" "}
            a Freelance Web Designer and Developer with a passion revolved
            around crafting{" "}
            <span className="font-normal text-[1.6rem]">
              fast, fluid, and high-performing
            </span>{" "}
            websites and web applications, all powered by the dynamic
            capabilities of a web technology called React - specifically,{" "}
            <span className="font-normal text-[1.6rem]">Next Js</span>.
          </motion.p>

          <div className="intro__image w-[clamp(280px,70%,380px)] xsmall:w-[clamp(280px,35vw,380px)] h-auto mx-auto xsmall:mr-0 small:w-[clamp(280px,70%,360px)] shadow-lg shadow-slate-400">
            <Image
              className="w-full h-full object-cover"
              src={me}
              alt="my profile image"
              width={500}
              height={500}
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            bounce: 0,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          itemProp="about"
          className="pt-4 small:pt-0"
        >
          With a strong combination of design and development expertise, I can
          help guide you throughout the entire process. Whether it&apos;s from
          the ground up, starting with{" "}
          <span className="font-normal text-[1.6rem]">
            {" "}
            wireframes, design, and development
          </span>
          , or refining an existing design into a meticulously crafted website
          with thoughtful enhancements.{" "}
        </motion.p>
      </section>

      <div className="px-[5%] small:px-layout-small max-w-screen-large mx-auto">
        <h2 className="pb-[2rem]">Skip to:</h2>
        <ul className="skip__to__list text-theme_dark_orange-900">
          {questionList.map((q, index) => (
            <motion.li
              key={q.key}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <a className="font-normal" href={q.href}>
                {q.text}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      <section className="bg-white-900 px-[5%] small:px-layout-small max-w-screen-large mx-auto">
        <div className="py-4">
          <h2 className="uppercase pt-[4.5rem] pb-[3rem] small:pb-[4rem] mx-auto w-[100%] text-center small:text-left">
            About Next.js
          </h2>
          {/* <h1 className="py-20">About Next.js</h1> */}

          <div
            id="what__is__next__js"
            className="small:grid small:grid-cols-10 w-full "
          >
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" text-theme_dark_orange-900 text-center xsmall:text-left capitalize col-span-2 mb-10 "
            >
              What is Next.js and why should you consider it?
            </motion.h4>

            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 1 }}
              transition={{
                bounce: 0,
              }}
              viewport={{ once: true }}
              className="col-span-8 small:pl-10"
            >
              <p className="mb-10 m-auto">
                Next.js is an advanced web development framework derived from
                React, a technology originally created by Facebook, designed to
                build fast and scalable websites and applications.
              </p>
              <h4 className="mb-4 m-auto font-semibold text-center xsmall:text-left">
                Here&apos;s how Next.js benefits the websites I create:
              </h4>

              <div className="mb-10 mx-auto">
                <WhyNext />
              </div>
              <p className="mb-20 m-auto">
                In summary, Next.js is like a toolkit that helps developers
                build faster, more secure, and beautiful websites. It ensures
                your website looks good, loads quickly, and is easy to maintain
                and improve in the long run. So, when you see a fantastic
                website or web app online, there&apos;s a good chance that it
                was built using Next.js!
              </p>
            </motion.div>
          </div>
          <hr className="m-auto" />
          <div
            id="next__js__speed"
            className="py-10 small:py-20 small:grid small:grid-cols-10 m-auto"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-theme_dark_orange-900 text-center xsmall:text-left capitalize col-span-2 mb-10"
            >
              Why are Next.js websites so fast?
            </motion.h3>

            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 1 }}
              transition={{
                bounce: 0,
              }}
              viewport={{ once: true }}
              className="small:pl-10 col-span-8 m-auto"
            >
              <p className="mb-10">
                Next.js uses optimised pages which require no server-side
                computation, and can be instantly streamed to the end-user from
                multiple locations. The result is an ultra fast loading
                experience for your users.
              </p>
              <p className="mb-10">
                Basically it loads only critical parts of the page, exactly when
                the visitor needs it, and not a second sooner. Once loaded,
                Next.js prefetches resources for other pages so that clicking on
                the site feels buttery smooth and responsive. Everything is
                statically generated at runtime - so your site loads as fast as
                possible.
              </p>
              <p className="">
                Unlike most traditional LAMP stack websites, the need for
                servers to perform logic and work whilst your visitors wait for
                the page to load is removed... which also ultimately removes the
                ways the website can be attacked by malicious code from hackers.
              </p>
            </motion.div>
          </div>
          <hr className="" />

          <div
            id="The__importance__of__owning__a__fast__website"
            className="py-10 small:py-20 small:grid small:grid-cols-10 m-auto  "
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" text-theme_dark_orange-900 text-center xsmall:text-left capitalize col-span-2 mb-10"
            >
              The importance of owning a fast website!
            </motion.h3>

            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 1 }}
              transition={{
                bounce: 0,
              }}
              viewport={{ once: true }}
              className="small:pl-10 w-full col-span-8 m-auto"
            >
              <p className="mb-10">
                A Google study found that{" "}
                <strong>
                  “50% of mobile website visitors will leave after a three
                  second page load”
                </strong>
                . In this same study, Google found that when comparing sites
                that load in 5 seconds vs sites that load in 19 seconds the
                sites had:
              </p>
              <ul className="pl-8 pb-10 font-normal">
                <li>
                  <span className="pr-4">🔥</span>70% longer average session
                  lengths
                </li>
                <li>
                  <span className="pr-4">🔥</span>35% lower bounce rates{" "}
                </li>
                <li>
                  <span className="pr-4">🔥</span>25% higher ad viewability than
                  their slower counterparts.{" "}
                </li>
              </ul>
              <p>
                <em>
                  It’s also worth noting that Google now ranks sites higher that
                  have fast performance!
                </em>
              </p>
            </motion.div>
          </div>
          <hr className="" />

          <div
            id="Already__have__a__Wordpress__website"
            className="py-10 small:py-20 small:grid small:grid-cols-10 m-auto  "
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" text-theme_dark_orange-900 text-center xsmall:text-left capitalize col-span-2 mb-10"
            >
              Already have a Wordpress website?{" "}
            </motion.h3>

            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 1 }}
              transition={{
                bounce: 0,
              }}
              viewport={{ once: true }}
              className="small:pl-10 w-full col-span-8 m-auto"
            >
              <p className="">
                No problem. Wordpress offers a “headless” approach which allows
                me to access your existing content. That way, you can continue
                to use what you’re familiar with for managing your content while
                your customers benefit from a fast, smooth and fully-customised
                website.. which is ultimately beneficial to your business and
                generating leads!
              </p>
            </motion.div>
          </div>
          <hr className="" />
          <div
            id="How__about__e-commerce__websites"
            className="py-10 small:py-20 small:grid small:grid-cols-10 m-auto"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" text-theme_dark_orange-900 text-center xsmall:text-left capitalize col-span-2 mb-10"
            >
              How about e-commerce websites?{" "}
            </motion.h3>

            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 1 }}
              transition={{
                bounce: 0,
              }}
              viewport={{ once: true }}
              className="small:pl-10 w-full col-span-8 m-auto"
            >
              <p className="mb-10">
                Headless e-commerce with Next.js provides flexibility,
                performance, and future-proofing, making it ideal for businesses
                that require a customised, scalable, and modern shopping
                experience for their customers.
              </p>
              <p className="mb-10">
                Platforms such as Shopify, Big Commerce, Swell, Medusa and
                Commerce Layer are a few options I’m familiar with but there are
                many more we can choose from. E-commerce platforms can help you
                manage everything from inventory & fulfilment to customer
                engagement and retention.{" "}
              </p>
              <p className="mb-10">
                Once we have a strong understanding of the needs of your
                business, we can go through the options that benefit you and
                your business the most.{" "}
              </p>
              <p className="mb-2 font-semibold">
                Already have an existing e-commerce store?
              </p>
              <p>
                This won&apos;t be a problem - if you&apos;re happy with the way
                your store management platform works for you (and depending on
                which platform you use), we can link your inventory to a new,
                &apos;headless&apos;, customer-facing website. Let&apos;s chat
                🤙
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Services />

      <ContactFormNew />
    </main>
  );
}
