import { Inter, Mulish, Poppins, Libre_Caslon_Text } from "next/font/google";
import { GoogleAnalytics } from "@/lib/GoogleAnalytics";

import { LocalBusiness, WithContext } from "schema-dts";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/global/Navbar";
import { Footer } from "./components/global/Footer";
import { Suspense } from "react";

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
  title: "Bloxy Web Services | Freelance Web Designer & Developer",
  description:
    "Supercharge your online presence with incredibly fast websites & apps - E-Commerce 🛍️ | Lead Gen 🎯 | Business 🏢 | + more!",
  metadataBase: new URL("https://www.bloxywebservices.co.uk"),
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
  "@id": "https://bloxywebservices.co.uk/",
  name: "Stuart Bloxham - Web Designer & Developer",
  url: "https://www.bloxywebservices.co.uk/",
  logo: "https://www.bloxywebservices.co.uk/images/icons/logo.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hare Street",
    addressLocality: "Buntingford",
    addressRegion: "Hertfordshire",
    addressCountry: "United Kingdom",
    postalCode: "SG9 0EA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "book a mould treatment",
    telephone: "+447806615231",
    email: "stuart@bloxywebservices.co.uk",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.94868891616687,
    longitude: 0.021126236728081227,
  },

  image: [
    "https://www.bloxywebservices.co.uk/opengraph-image.png?1581b81fa00074ce",
    "/screenshot.png",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      {
        "@type": "DayOfWeek",
        name: "Monday",
      },
      {
        "@type": "DayOfWeek",
        name: "Tuesday",
      },
      {
        "@type": "DayOfWeek",
        name: "Wednesday",
      },
      {
        "@type": "DayOfWeek",
        name: "Thursday",
      },
      {
        "@type": "DayOfWeek",
        name: "Friday",
      },
    ],
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
      <Suspense fallback={null}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-M0Q3NR35G3" />
      </Suspense>

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
      </body>
    </html>
  );
}
