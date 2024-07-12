import { Code } from "./Icons";

export const DevelopmentInfo = () => {
  return (
    <section
      id="dev"
      className="development__info relative bg-theme_peach-900 text-theme_black-900"
    >
      <div className="relative px-[5%] py-[6rem] max-w-[1440px] small:px-layout-small small:mx-auto ">
        <div className="absolute top-0 left-0 w-[350px] h-auto opacity-[0.045] text-theme_black-900 translate-x-[-4rem]">
          <Code fill="currentColor" />
        </div>
        <h2 className="relative uppercase pb-[3rem] small:pb-[4rem] mx-auto w-full text-center small:text-left">
          development
        </h2>
        <p className="relative py-[1rem]">
          This is the important part of bringing your design to life. As a Full
          Stack Developer, there are a number of features and ideas that can be
          incorporated into your website, whether it’s being able to upload and
          change the content yourself through a <strong> CMS </strong>(Content
          Management System), an <strong>interactive map</strong>,{" "}
          <strong>animations</strong> or a selection of different image /
          content <strong>sliders to showcase your services or products</strong>
          .
        </p>
        <p className="relative py-[1rem]">
          My websites are built to pixel-perfect standard and are, in most
          cases, improved due to the nature of the web technologies I work with.
          They’re <strong>fully responsive</strong> (working for mobile, tablet
          and desktop sized screens) and the{" "}
          <strong>images are optimised</strong> to suit the the viewing device
          and provide users with <strong>faster loading times</strong>.
        </p>
        <p className="relative py-[1rem]">
          During the build process I’ll upload changes to a development link
          which I’ll provide you so that you can keep track of progress and get
          a feel for the website and how it works in the browser. I want this
          transparency in my work to not only give you confidence in the
          direction your website is going, but to give you the opportunity to
          interject incase you want to change some *things before it gets too
          late* *change wording here
        </p>
      </div>
    </section>
  );
};
