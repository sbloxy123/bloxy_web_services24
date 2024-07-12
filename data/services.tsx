import cms from "@/public/images/icons/Services/monitor.svg";
import design from "@/public/images/icons/Services/sketch.svg";
import branding from "@/public/images/icons/Services/branding.svg";
import seo from "@/public/images/icons/Services/seo-search-symbol.svg";
import support from "@/public/images/icons/Services/support.svg";
import code from "@/public/images/icons/Services/code.svg";
import {
  Branding,
  Code,
  Monitor,
  SEO,
  Sketch,
  Support,
} from "@/app/components/Icons";
import { ReactNode } from "react";

interface Service {
  key?: number;
  title: string;
  intro: string;
  icon: ReactNode;
  showOnServicePage?: boolean;
  scroll__id?: string;
}

export const services: Service[] = [
  {
    key: 1,
    title: "Development",
    intro:
      "By using modern technologies, I'm able to build fast and interactive sites that your audience will enjoy visiting. Nobody likes to visit a clunky, slow website and it can be detrimental to your business.",
    icon: <Code fill="currentColor" />,
    showOnServicePage: true,
    scroll__id: "#dev",
  },
  {
    key: 2,
    title: "CMS (Content Management Service) integration",
    intro:
      "CMSs offer a fantastic way to manage your content by yourself. You've likely heard of Wordpress?.. this is a CMS. I can integrate a number of these great services such as Sanity, Strapi and Wordpress to your website - all providing excellent performance results.",
    icon: <Monitor fill="currentColor" />,
    showOnServicePage: true,
    scroll__id: "#cms",
  },

  {
    key: 3,
    title: "Design",
    intro:
      "Website design is an important part of your online presence. The design is the first thing your audience will see and it provides them with an insight into how you view them as a customer and how much they can trust you.",
    icon: <Sketch fill="currentColor" />,
    showOnServicePage: true,
    scroll__id: "#design",
  },
  {
    key: 4,
    title: "SEO",
    intro:
      "A website sitting higher in Search Engine results is a great way to bring in warm leads from people searching for terms that directly relate to your business.",
    icon: <SEO fill="currentColor" />,
    showOnServicePage: true,
    scroll__id: "#seo",
  },
  {
    key: 5,
    title: "Branding & Marketing",
    intro:
      "You might want to think about branding your email templates, leaflets, business cards etc to match with your new website.",
    icon: <Branding fill="currentColor" />,
    showOnServicePage: false,
    scroll__id: "#branding",
  },
  {
    key: 6,
    title: "Support & Hosting",
    intro:
      "Choosing the right hosting platform can be complicated so I can recommend where to host your site to provide you with reliability and performance. Once you're happy with your new site you're good to go. For a small retainer, I can provide you with ongoing support.",
    icon: <Support fill="currentColor" />,
    showOnServicePage: false,
    scroll__id: "#support",
  },
];
