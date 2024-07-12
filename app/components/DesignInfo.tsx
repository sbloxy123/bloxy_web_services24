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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Aliquam porttitor mi sed luctus interdum. Interdum et malesuada fames ac ante ipsum",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Aliquam porttitor mi sed luctus interdum. Interdum et malesuada fames ac ante ipsum",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Aliquam porttitor mi sed luctus interdum. Interdum et malesuada fames ac ante ipsum",
      "Aliquam porttitor mi sed luctus interdum. Interdum et malesuada fames ac ante ipsum",
      "Aliquam porttitor mi sed luctus interdum. Interdum et malesuada fames ac ante ipsum",
      "Aliquam porttitor mi sed luctus interdum. Interdum et malesuada fames ac ante ipsum",
      "Aliquam porttitor mi sed luctus interdum. Interdum et malesuada fames ac ante ipsum",
      "Aliquam porttitor mi sed luctus interdum. Interdum et malesuada fames ac ante ipsum",
      "Aliquam porttitor mi sed luctus interdum. Interdum et malesuada fames ac ante ipsum",
      "Aliquam porttitor mi sed luctus interdum. Interdum et malesuada fames ac ante ipsum",
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
      <div className="px-[5%] py-[6rem] max-w-[1440px] small:px-layout-small small:mx-auto ">
        <div className="relative">
          <h2 className="uppercase pb-[3rem] small:pb-[4rem] mx-auto w-[100%] text-center small:text-left">
            design
          </h2>
          <p className="small:w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            et pharetra tortor. Praesent volutpat massa eget lorem suscipit, at
            sagittis dui vehicula. Aliquam porttitor mi sed luctus interdum.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis
            vel risus vel lectus congue aliquam eu sodales ante.
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
