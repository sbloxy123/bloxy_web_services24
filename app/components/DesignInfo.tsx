"use client";
import Image, { StaticImageData } from "next/image";
import { Sketch } from "./Icons";
import wireframeImage from "/public/images/design-images/wireframes.png";
import designImage from "/public/images/design-images/design.png";
import prototypeImage from "/public/images/design-images/prototype.png";
import { useEffect, useState } from "react";

interface DesignSlide {
  id: number;
  title: string;
  text: string[];
  image?: {
    src: StaticImageData;
    alt: string;
  };
}

const designSlides: DesignSlide[] = [
  {
    id: 1,
    title: "Wireframes",
    text: [
      "Wireframes serve as the architectural blueprint for your website, laying the foundation for design and development. This initial stage is crucial as it helps to identify and address any concerns early in the process, ensuring a smooth transition from concept to completion. By outlining where content will be placed and what features are to be included, wireframes clarify the site's structure before visual elements are added.",

      "The benefits of wireframing are substantial. They foster creativity and decision-making, allowing you to visualise the user journey and make informed choices about what to include on your site. Wireframes also streamline the collaboration process, making it easier to communicate ideas and modifications between stakeholders. Ultimately, they ensure that every aspect of the site aligns with your strategic goals before being distracted by colours and images, providing a clear path to a user-friendly and effective online presence.",
    ],
    image: {
      src: wireframeImage,
      alt: "example wireframe screenshot",
    },
  },
  {
    id: 2,
    title: "Design",
    text: [
      "After the foundational wireframes, the design stage brings your brand to life by integrating your unique colors, imagery, and overall aesthetic. This phase is essential in transforming the structural outline into a visually appealing and cohesive website. The design process not only enhances the look and feel of your site but also aligns every visual element with your brand's identity, ensuring consistency across all touchpoints.",

      "During this stage, I carefully select color schemes and graphics that resonate with your target audience, enhancing user engagement and reinforcing your brand's message. The design phase also allows for the exploration of visual strategies that can improve user experience, such as intuitive layouts, engaging graphics, and interactive elements. By the end of this process, your website will not only be attractive but also functionally optimized to meet the needs of your visitors, making every interaction meaningful and impactful.",
    ],
    image: {
      src: designImage,
      alt: "example design screenshot",
    },
  },
  {
    id: 3,
    title: "Prototype",
    text: [
      "The prototyping stage is a dynamic phase where the static designs come to life. This crucial step involves linking all the individual pages together to form a fully interactive model of your website. Unlike simple design mockups, a prototype allows you and other stakeholders to experience the actual flow of the website, interacting with its features as if it were live. This not only gives a realistic feel of the final product but also provides an opportunity to test usability and fine-tune the user experience.",

      "Prototyping is invaluable because it exposes any potential issues in navigation and functionality before the development stage. It ensures that transitions between pages are smooth and that the user interface is intuitive, creating a seamless experience for visitors. This stage allows for iterative feedback and adjustments, minimizing costly revisions later in the development process and accelerating the launch timeline. By the end of prototyping, you will have a clear and tangible representation of how your website will function, ensuring alignment with your vision and user expectations.",
    ],
    image: {
      src: prototypeImage,
      alt: "example design screenshot",
    },
  },
];

export const DesignInfo = () => {
  const [activeDesign, setActiveDesign] = useState(1);

  useEffect(() => {
    // console.log("active Design is:", activeDesign);
  }, [activeDesign]);

  return (
    <section id="design" className="relative bg-[#202628] text-white">
      <div className="px-[5%] py-[6rem] max-w-[1440px] small:px-layout-small small:mx-auto overflow-hidden small:overflow-visible">
        <div className="relative">
          <h2 className="uppercase pb-[3rem] small:pb-[4rem] mx-auto w-[100%] text-center small:text-left">
            design
          </h2>
          <p className="small:w-[80%] py-[1rem]">
            If you&apos;re looking to kickstart your website with a sleek,
            professional design, I utilise Figma, a leading design tool, to
            create detailed wireframes, designs, and prototypes. This crucial
            stage not only provides a clear visual of how your website will look
            and feel but also plays a pivotal role in translating your branding
            elements—like colors and fonts—into tangible designs. This process
            not only aligns with your vision but also opens up possibilities for
            new ideas and enhancements that could appeal to your end-users.
          </p>
          <p className="small:w-[80%] py-[1rem]">
            If you come to me with a pre-existing design, rest assured, I am
            adept at transforming it into a pixel-perfect, fully interactive
            website. My goal is to develop a site that not only meets but
            exceeds your expectations, ensuring that every detail is precise and
            true to your original concept.
          </p>

          <div className="absolute top-0 right-0 w-[350px] h-auto opacity-[0.08] text-theme_peach-900 translate-x-[18rem]">
            <Sketch fill="currentColor" />
          </div>
        </div>

        <div className="design__slider__nav relative grid grid-cols-3 gap-1 mt-[4rem] small:flex">
          {designSlides.map((slide) => (
            <div
              key={slide.id}
              className={`${
                activeDesign === slide.id
                  ? "bg-theme_black-900 text-white border-2 border-b-0 border-theme_peach-900"
                  : "bg-theme_gray-900 text-theme_black-900 "
              }  rounded-t-lg text-center duration-100 ease-in`}
            >
              <button
                className="w-full h-full py-[0.3rem] text-[1.4rem] xsmall:px-[3rem] small:py-[0.9rem] small:px-[5rem]"
                onClick={() => setActiveDesign(slide.id)}
              >
                {slide.title}
              </button>
            </div>
          ))}
        </div>
        <div>
          {designSlides.map((slide) => (
            <div key={slide.id}>
              {activeDesign === slide.id && (
                <div
                  key={slide.id}
                  className="relative bg-theme_black-900 xsmall:overflow-hidden shadow-xl shadow-theme_black-900"
                >
                  <div className="design__image__container xsmall:absolute xsmall:top-0 xsmall:right-0 xsmall:w-1/2 xsmall:h-full ">
                    <div className="design__item__image relative w-full h-auto aspect-[737/407] overflow-hidden border-[1.4rem] border-[#202628] xsmall:border-0  xsmall:absolute xsmall:top-auto xsmall:bottom-0 xsmall:left-0 xsmall:w-[140%]">
                      {slide.image && (
                        <Image
                          src={slide.image?.src}
                          alt={slide.image?.alt}
                          width={700}
                          height={700}
                          className="w-full h-full object-cover small:object-contain small:w-auto"
                        />
                      )}
                    </div>
                  </div>
                  <div className="design__item__text pt-[1.5rem] pb-[3rem] px-[1.4rem] xsmall:w-[50%] small:w-[45%] small:px-[3rem] ">
                    <h3 className="pb-[1rem] xsmall:pt-[3rem]">
                      {slide.title}
                    </h3>

                    <div className="h-[25rem] overflow-auto pr-8 small:h-[35rem]">
                      {slide.text.map((para, index) => (
                        <p key={index} className="py-2">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
