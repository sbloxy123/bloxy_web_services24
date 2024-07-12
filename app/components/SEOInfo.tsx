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
          The SEO landscape is forever changing and search engines are
          continually trying to improve the way search terms return the most
          reliable and up to date results to their customers. There’s a number
          of factors that Search Engines consider as a reliable and ‘promotable’
          link. One of those factors is page speed and as of 2021, Google
          started ranking faster websites higher than those that have similar
          content`.
        </p>
        <p className="relative py-[1rem]">
          By using the latest web technologies, my websites are fully optimised
          for speed, user experience and customisation to enhance search engine
          ranking. Where appropriate I support content with ‘Schema.org markup’
          which is basically optimised coding markup in which search engines use
          to understand what a website, page or article is essentially about.
          Images are optimised for fast loading speeds and I use plugins and
          software to ensure optimum html markup is used throughout my sites for
          search engines to acknowledge when ranking and processing a website.
        </p>
        <p className="relative py-[1rem]">
          One key thing that is important to mention however is regarding the
          actual content of your website. Google is able to understand the
          content of your website and although I can help guide Google to
          understand what to look for and where (as mentioned previously), it’s
          important that you have good quality, up to date and relevant content
          throughout your website. Content writers and SEO specialists are a
          great way to make sure you capitalise on the website I build for you
          (Although this can depend on how niche your business is, in which case
          we can probably be a bit more flexible), however with the use of Ai,
          we can work together on creating fluid and captivating content for
          both SEO and customer purposes.
        </p>
      </div>
    </section>
  );
};
