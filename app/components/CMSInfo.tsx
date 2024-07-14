import { Monitor } from "./Icons";

export const CMSInfo = () => {
  return (
    <section
      id="cms"
      className="development__info relative bg-theme_black-900 text-white"
    >
      <div className="relative px-[5%] py-[12rem] max-w-[1440px] small:px-layout-small small:mx-auto overflow-hidden small:overflow-visible">
        <div className="absolute top-[6rem] right-0 w-[350px] h-auto opacity-[0.08] text-theme_peach-900 translate-x-[4rem]">
          <Monitor fill="currentColor" />
        </div>
        <h2 className="relative uppercase pb-[3rem] small:pb-[4rem] mx-auto w-[100%] text-center small:text-left small:w-[80%]">
          CMS (Content Management System)
        </h2>
        <p className="relative py-[1rem] small:w-[80%]">
          While I prefer using Sanity.io for its high customizability and rich
          feature set, the choice of CMS is ultimately yours. Sanity.io offers a
          user-friendly editor that simplifies content management without
          sacrificing functionality. However, if you have a preferred CMS
          you&apos;re already comfortable with, I&apos;m flexible. Thanks to the
          versatile web technologies I utilise, I can integrate and build on
          virtually any CMS to meet your specific needs and ensure your website
          operates smoothly and efficiently.
        </p>
      </div>
    </section>
  );
};
