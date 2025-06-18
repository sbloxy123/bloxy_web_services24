"use client";
import Image from "next/image";
import projectData from "@/data/projectData";
import { motion } from "framer-motion";
import { ButtonLink } from "./ButtonLink";

export const Projects = () => {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section className="relative md:content-container font-sans z-10 flex flex-col-reverse">
      {projectData.projects.map((project, index) => {
        const { id, title, summary, date_completed, preview_img, tags, url } =
          project;

        return (
          <div
            key={id}
            className={`${
              index % 2 === 0 && "md:flex-row-reverse"
            } mx-auto text-theme_white-900 w-full md:flex justify-items-center justify-center py-12 md:py-16`}
          >
            {/* ========= project text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className="md:w-[50%] h-fit my-auto"
            >
              {/* ======= TITLE */}
              <div className="uppercase flex justify-between border-b pb-[0.4rem] border-theme_white-900 mb-12">
                <h4>{title}</h4>
                <h4>
                  <span className="pr-2">year:</span> {date_completed}
                </h4>
              </div>
              {/* ====== MOBILE IMAGE SHOWN */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.2,
                }}
                viewport={{ once: true }}
                className="md:my-auto h-fit md:hidden pb-14"
              >
                <Image
                  className="w-auto h-auto mx-auto"
                  src={preview_img}
                  alt="lce"
                  width={500}
                  height={500}
                  priority={false}
                />
              </motion.div>
              <div
                className={`${
                  index % 2 === 0 && "md:ml-auto"
                } md:w-[90%] mb-10 md:mb-0`}
              >
                {/* ==== DETAILS */}
                {summary.map((para) => (
                  <p className="pb-4" key={para}>
                    {para}
                  </p>
                ))}

                <p
                  className={`${
                    index % 2 === 0 && " text-left"
                  } pt-2 pb-2 mb-4 border-b uppercase border-theme_yellow-900 text-theme_yellow-900`}
                >
                  Scope:
                </p>
                {/* ===== project tags */}
                <div className="flex gap-1 flex-wrap">
                  {tags.map((tagName, index) => {
                    let tagColor;
                    if (tagName == "E-Commerce") {
                      tagColor = "bg-blue-200";
                    }
                    if (tagName == "Design") {
                      tagColor = "bg-green-200";
                    }
                    if (tagName == "Content Creation") {
                      tagColor = "bg-red-200";
                    }
                    if (tagName === "Development") {
                      tagColor = "bg-orange-200";
                    }
                    if (tagName === "Next.js") {
                      tagColor = "bg-yellow-200";
                    }
                    if (tagName === "Hosting") {
                      tagColor = "bg-purple-200";
                    }
                    if (tagName === "Content Management System") {
                      tagColor = "bg-cyan-200";
                    }
                    if (tagName === "Gatsby.js") {
                      tagColor = "bg-gray-200";
                    }
                    if (tagName === "Annimations") {
                      tagColor = "bg-lime-300";
                    }

                    return (
                      <motion.p
                        key={tagName}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                        viewport={{ once: true }}
                        className={`${tagColor}  py-1 w-fit border-2 border-black px-2 uppercase font-normal text-[1.1rem] text-theme_black-900`}
                      >
                        {tagName}
                      </motion.p>
                    );
                  })}
                </div>

                {url && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    <ButtonLink
                      buttonText="Visit Website"
                      url={url}
                      target="_blank"
                      aria={`visit ${title}'s website (opens in new window)`}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
            {/* ======= PROJECT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.2,
              }}
              viewport={{ once: true }}
              className="md:my-auto h-fit hidden md:block"
            >
              <Image
                className="w-auto h-auto mx-auto"
                src={preview_img}
                alt="lce"
                width={500}
                height={500}
                priority={false}
              />
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};
