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
      "I use modern technologies to build fast, interactive websites that offer a seamless user experience. Avoid the pitfalls of slow, clunky sites and enhance your business with efficient web solutions.",
    icon: <Code fill="currentColor" />,
    showOnServicePage: true,
    scroll__id: "#dev",
  },
  {
    key: 2,
    title: "CMS (Content Management Service) integration",
    intro:
      "CMSs let you manage your content independently. I can integrate popular options like Sanity, Strapi, and WordPress into your site, ensuring excellent performance and ease of use.",
    icon: <Monitor fill="currentColor" />,
    showOnServicePage: true,
    scroll__id: "#cms",
  },

  {
    key: 3,
    title: "Design",
    intro:
      "Website design is crucial for your online presence. I use Figma for designs, offering great sharing capabilities and realistic prototyping to reflect how you value customers and build trust in your brand.",
    icon: <Sketch fill="currentColor" />,
    showOnServicePage: true,
    scroll__id: "#design",
  },
  {
    key: 4,
    title: "SEO",
    intro:
      "SEO helps your website rank higher in search results, attracting warm leads. I use schema.org for enhanced search visibility and Google Analytics to track performance and customer demographics.",
    icon: <SEO fill="currentColor" />,
    showOnServicePage: true,
    scroll__id: "#seo",
  },
  {
    key: 5,
    title: "Branding & Marketing",
    intro:
      "Ensure consistent branding across all materials, including email templates, leaflets, and business cards, to match your new website. Strengthen your brand identity and create a cohesive, professional image.",
    icon: <Branding fill="currentColor" />,
    showOnServicePage: false,
    scroll__id: "#branding",
  },
  {
    key: 6,
    title: "Support & Hosting",
    intro:
      "Selecting the right hosting platform is crucial for reliability and performance. I provide expert recommendations and, for a small retainer, offer ongoing support to ensure your site remains secure and efficient.",
    icon: <Support fill="currentColor" />,
    showOnServicePage: false,
    scroll__id: "#support",
  },
];
