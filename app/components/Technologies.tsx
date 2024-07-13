import { promises as fs } from "fs";
import path from "path";
import { TechSwiper } from "./swipers/TechSwiper";

export const Technologies = async () => {
  const imageDirectory = path.join(
    process.cwd(),
    "./public/images/stack-icons"
  );
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <section className="relative bg-theme_white-900 text-theme_black-900">
      <div className="relative px-[5%] py-[6rem] max-w-[1440px] small:px-layout-small small:mx-auto overflow-hidden small:overflow-visible">
        <h2 className="uppercase pb-[3rem] small:pb-[4rem] mx-auto w-full text-center small:text-left">
          My Technologies and Tooling
        </h2>

        <p>introduction re my tech etc</p>

        <div>
          <TechSwiper />
        </div>
      </div>
    </section>
  );
};
