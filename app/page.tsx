import Navbar from "./components/global/Navbar";
import Hero from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Footer } from "./components/global/Footer";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <div className="gardient__container relative h-[200px] bg-theme_black-900 mt-[-5rem]">
        <div className="hero__border__gradient absolute content-none bottom-[90%] w-full h-full"></div>
      </div>
      <Services />
      <div className="relative z-40 bg-theme_black-900 px-[5%] small:px-layout-small">
        <h2 className="uppercase text-theme_white-900 pt-24 pb-[4rem]">
          Latest work.
        </h2>
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
