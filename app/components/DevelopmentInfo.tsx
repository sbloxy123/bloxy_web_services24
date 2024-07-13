import { Code } from "./Icons";

export const DevelopmentInfo = () => {
  return (
    <section
      id="dev"
      className="development__info relative bg-theme_peach-900 text-theme_black-900"
    >
      <div className="relative px-[5%] py-[6rem] max-w-[1440px] small:px-layout-small small:mx-auto overflow-hidden small:overflow-visible">
        <div className="absolute top-0 left-0 w-[350px] h-auto opacity-[0.045] text-theme_black-900 translate-x-[-4rem]">
          <Code fill="currentColor" />
        </div>
        <h2 className="relative uppercase pb-[3rem] small:pb-[4rem] mx-auto w-full text-center small:text-left small:w-[80%] ml-auto mr-0">
          development
        </h2>

        <p className="relative py-[1rem] small:w-[80%] ml-auto">
          Web development is the pivotal stage where your design transitions
          into a fully functional website. As a Full Stack Developer, I
          integrate a variety of features to enhance your site&apos;s
          interactivity and usability. This includes seamless CMS integration
          for easy content management, dynamic maps, engaging animations, and
          versatile image/content sliders to effectively showcase your services
          or products.
        </p>
        <p className="relative py-[1rem] small:w-[80%] ml-auto">
          I commit to a pixel-perfect execution, often enhancing designs with
          the advanced web technologies I employ. My websites are meticulously
          optimized for all devices, ensuring responsiveness and fast loading
          times across mobile, tablet, and desktop screens.
        </p>
        <p className="relative py-[1rem] small:w-[80%] ml-auto">
          Throughout the development phase, I provide access to a development
          link, allowing you to monitor progress and experience the site&apos;s
          functionality in real-time. This transparency is designed to build
          your confidence in the project&apos;s direction and to facilitate
          timely feedback, ensuring any adjustments can be made efficiently
          before finalizing the website.
        </p>
      </div>
    </section>
  );
};
