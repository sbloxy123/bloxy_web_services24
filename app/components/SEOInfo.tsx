import { SEO } from "./Icons";

export const SEOInfo = () => {
  return (
    <section
      id="seo"
      className="development__info relative bg-theme_peach-900 text-theme_black-900"
    >
      <div className="relative px-[5%] py-[12rem] max-w-[1440px] small:px-layout-small small:mx-auto ">
        <div className="absolute top-[6rem] left-0 w-[350px] h-auto opacity-[0.08] text-theme_black-900 translate-x-[-4rem]">
          <SEO fill="currentColor" />
        </div>
        <h2 className="relative uppercase pb-[3rem] small:pb-[4rem] mx-auto w-[100%] text-center small:text-left">
          SEO (Search Engine Optimisation)
        </h2>

        <p className="relative py-[1rem]">
          The SEO landscape is forever evolving, with search engines
          continuously refining their algorithms to present the most relevant
          and up-to-date results. Among the key factors influencing rankings is
          page speed; since 2021, Google has prioritized faster-loading
          websites. My approach leverages the latest web technologies to ensure
          that your website is optimized for speed, user experience, and
          customization, which are crucial for enhancing search engine rankings.
        </p>
        <p className="relative py-[1rem]">
          I enhance site content with Schema.org markup—a coding standard that
          helps search engines understand the details of your website, such as
          the purpose of a page or the subject of an article. Additionally, I
          optimize images for quick loading and use advanced plugins and
          software to ensure optimal HTML markup, making your website more
          favorable in search engine evaluations.
        </p>
        <p className="relative py-[1rem]">
          It&apos;s important to note the role of content quality in SEO
          success. While employing content writers and SEO specialists can
          certainly enhance your site&apos;s performance, I strongly leverage
          the powerful use of AI tools as a prime method to create compelling
          content that serves both SEO goals and user engagement.
        </p>
      </div>
    </section>
  );
};