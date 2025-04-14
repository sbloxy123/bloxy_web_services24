import { Inter, Mulish, Poppins, Libre_Caslon_Text } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { LocalBusiness, WithContext } from "schema-dts";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/global/Navbar";
import { Footer } from "./components/global/Footer";
import "react-toastify/dist/ReactToastify.css";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-mulish",
});
const caslon = Libre_Caslon_Text({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-calson",
});

export const metadata: Metadata = {
  title: "Bloxie | Freelance Web Designer & Developer",
  description:
    "Supercharge your online presence with fast, smooth and SEO-friendly websites & apps. Expert in E-Commerce 🛍️, Lead Generation 🎯, Business Websites 🏢, and more. Serving Hertfordshire and the UK!",
  metadataBase: new URL("https://www.bloxie.co.uk"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-gb": "/en-gb",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

const jsonLd: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloxie.co.uk/",
  name: "Stuart Bloxham - Web Designer & Developer",
  url: "https://www.bloxie.co.uk/",
  logo: "https://www.bloxie.co.uk/images/icons/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Mead Villa, Hare Street",
    addressLocality: "Buntingford",
    addressRegion: "Hertfordshire",
    addressCountry: "United Kingdom",
    postalCode: "SG9 0EA",
  },
  telephone: "+447806615231",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    telephone: "+447806615231",
    email: "stuart@bloxie.co.uk",
  },
  priceRange: "££",
  sameAs: ["https://www.linkedin.com/in/stuart-bloxham/"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.94868891616687,
    longitude: 0.021126236728081227,
  },

  image: ["https://www.bloxie.co.uk/opengraph-image.png"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:30",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${inter.className} ${poppins.variable} `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>

      <GoogleAnalytics gaId="G-M0Q3NR35G3" />
      {/* <GoogleTagManager gtmId="GTM-GTSD" /> */}
    </html>
  );
}
