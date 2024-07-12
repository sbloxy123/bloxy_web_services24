import { Monitor } from "./Icons";

export const CMSInfo = () => {
  return (
    <section
      id="cms"
      className="development__info relative bg-theme_black-900 text-white"
    >
      <div className="relative px-[5%] py-[12rem] max-w-[1440px] small:px-layout-small small:mx-auto ">
        <div className="absolute top-[6rem] right-0 w-[350px] h-auto opacity-[0.08] text-theme_peach-900 translate-x-[4rem]">
          <Monitor fill="currentColor" />
        </div>
        <h2 className="relative uppercase pb-[3rem] small:pb-[4rem] mx-auto w-[100%] text-center small:text-left">
          CMS (Content Management System)
        </h2>
        <p className="relative py-[1rem]">
          Although my choice of CMS is Sanity.io, the choice is ultimately
          yours. I choose to work with Sanity.io due to it’s ability to be fully
          customised which ultimately provides you with a simple yet feature
          rich editor for your content. If you have a CMS that you’re familiar
          with and you would rather stick with that, that’s fine! Due to the
          nature of the web technologies I work with, I can plug into almost any
          CMS and build from this.
        </p>
      </div>
    </section>
  );
};
