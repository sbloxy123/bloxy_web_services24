import Hero from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
// import ContactForm from "./components/ContactForm";
import { ScrollArrow } from "./components/global/ScrollArrow";
import ContactFormNew from "./components/ContactFormNew";

export default function Home() {
  return (
    <main className="">
      <ScrollArrow />

      <Hero />
      <div className="gardient__container relative h-[200px] bg-theme_black-900 mt-[-5rem]">
        <div className="hero__border__gradient absolute content-none bottom-[90%] w-full h-full"></div>
      </div>
      <Services />
      <div className="relative bg-theme_black-900 z-40 mt-[-2px]">
        <div className="relative px-[5%] small:px-layout-small max-w-screen-large mx-auto">
          <h2 className="uppercase text-theme_white-900 pt-24 pb-[4rem]">
            Latest work.
          </h2>
          <Projects />
        </div>
        <div className="relative py-48">
          <ContactFormNew />
        </div>
      </div>
    </main>
  );
}
