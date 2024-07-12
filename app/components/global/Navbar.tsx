"use client";
import Image from "next/image";
import { useEffect, useRef, RefObject, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const backgroundVariants = {
  open: {
    opacity: 1,
    y: 0,
    height: "100vh",
    transition: {
      // type: "spring", // Specifying spring type here
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.4,
      duration: 0.5,
    },
  },
  closed: {
    opacity: 1,
    y: "-100%",
    height: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    opacity: 1,
    y: "-100%",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const navVariants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15, duration: 0.3 }, // delayChildren starts the staggering after the menu opens
  },
  closed: {
    opacity: 0.4,
    transition: { staggerChildren: 3, staggerDirection: -1, duration: 0.5 }, // staggerDirection -1 makes the children animate in reverse order
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.2 },
  },
  closed: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.2 },
  },
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [darkText, setDarkText] = useState<boolean | false>(false);

  useEffect(() => {
    // Reset hover state when the route changes
    setHoveredLink(null);

    pathname == "/about" || pathname == "/projects" || pathname == "/contact"
      ? setDarkText(true)
      : setDarkText(false);
  }, [pathname]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative z-50 small:fixed top-0 left-0 w-full text-white ${
        searchIsOpen || isOpen ? "fixed" : "fixed"
      } ${isScrolled ? "bg-theme_peach-900" : ""}`}
    >
      <header className="header relative tracking-[0.06em] z-50 bg-theme_peach-900 small:bg-transparent">
        <div
          className={`relative z-50 max-w-screen-large mx-auto  ${
            isScrolled ? "xsmall:py-[0.8rem]" : "py-[0.8rem] small:py-[2.7rem]"
          }`}
        >
          <div className="flex items-center justify-between h-20 px-[5%] small:px-layout-small">
            <Link
              href="/"
              className={`header__logo text-[2rem] font-caslon font-[400] tracking-normal ${
                isScrolled || darkText ? "text-theme_black-900" : "text-white"
              }`}
              aria-label="home"
            >
              {/* header-logo */}
              Bloxy Web Services.
            </Link>

            {/* ====== desktop nav ====== */}
            <div className="flex items-center">
              <div className="hidden small:block">
                <nav>
                  <ul
                    className={`nav__link__list flex items-center justify-between w-[38vw] max-w-[515px] capitalize  font-sans  text-[clamp(1.1rem,1vw,1.4rem)] small:pl-[1.9rem] ${
                      isScrolled || darkText
                        ? "text-theme_black-900"
                        : "text-white"
                    }`}
                  >
                    {navLinks.map((link) => {
                      let isActive = pathname === link.href;
                      if (!isActive && link.href !== "/") {
                        isActive = pathname.includes(link.href.split("/")[1]);
                      }
                      // Override isActive if this link is hovered or another link is being hovered
                      if (hoveredLink !== null) {
                        isActive = hoveredLink === link.href;
                      }

                      return (
                        <li
                          key={link.name}
                          onMouseEnter={() => setHoveredLink(link.href)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <Link href={link.href} className="">
                            <div
                              className={`${
                                isActive && "nav__item__active"
                              } font-[300] nav__item__link text-right ${
                                isScrolled || darkText
                                  ? "nav__item__link--scrolled"
                                  : ""
                              }`}
                            >
                              {link.name}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>

            {/* ==== nav extras ==== */}
            <div className="flex gap-[1rem] small:hidden">
              <div className="-mr-2 flex ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className={`${
                    searchIsOpen && "hidden"
                  } w-[3.8rem] block xsmall:w-[4rem] aspect-square items-center justify-center p-[0.2rem] rounded-md text-theme_black-900`}
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3333 17.917H16.6667C16.3351 17.917 16.0172 17.7853 15.7828 17.5509C15.5484 17.3165 15.4167 16.9985 15.4167 16.667C15.4167 16.3355 15.5484 16.0175 15.7828 15.7831C16.0172 15.5487 16.3351 15.417 16.6667 15.417H33.3333C33.6648 15.417 33.9828 15.5487 34.2172 15.7831C34.4516 16.0175 34.5833 16.3355 34.5833 16.667C34.5833 16.9985 34.4516 17.3165 34.2172 17.5509C33.9828 17.7853 33.6648 17.917 33.3333 17.917Z"
                        fill="#2F3047"
                      />
                      <path
                        d="M33.45 11.25H6.78333C6.4518 11.25 6.13386 11.1183 5.89944 10.8839C5.66502 10.6495 5.53333 10.3315 5.53333 10C5.53333 9.66848 5.66502 9.35054 5.89944 9.11612C6.13386 8.8817 6.4518 8.75 6.78333 8.75H33.45C33.7815 8.75 34.0995 8.8817 34.3339 9.11612C34.5683 9.35054 34.7 9.66848 34.7 10C34.7 10.3315 34.5683 10.6495 34.3339 10.8839C34.0995 11.1183 33.7815 11.25 33.45 11.25Z"
                        fill="#2F3047"
                      />
                      <path
                        d="M33.45 24.583H6.78333C6.4518 24.583 6.13386 24.4513 5.89944 24.2169C5.66502 23.9825 5.53333 23.6645 5.53333 23.333C5.53333 23.0015 5.66502 22.6835 5.89944 22.4491C6.13386 22.2147 6.4518 22.083 6.78333 22.083H33.45C33.7815 22.083 34.0995 22.2147 34.3339 22.4491C34.5683 22.6835 34.7 23.0015 34.7 23.333C34.7 23.6645 34.5683 23.9825 34.3339 24.2169C34.0995 24.4513 33.7815 24.583 33.45 24.583Z"
                        fill="#2F3047"
                      />
                      <path
                        d="M33.3333 31.25H16.6667C16.3351 31.25 16.0172 31.1183 15.7828 30.8839C15.5484 30.6495 15.4167 30.3315 15.4167 30C15.4167 29.6685 15.5484 29.3505 15.7828 29.1161C16.0172 28.8817 16.3351 28.75 16.6667 28.75H33.3333C33.6648 28.75 33.9828 28.8817 34.2172 29.1161C34.4516 29.3505 34.5833 29.6685 34.5833 30C34.5833 30.3315 34.4516 30.6495 34.2172 30.8839C33.9828 31.1183 33.6648 31.25 33.3333 31.25Z"
                        fill="#2F3047"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7667 19.9999L29.1333 12.6333C29.2561 12.5188 29.3546 12.3808 29.423 12.2275C29.4913 12.0742 29.528 11.9086 29.531 11.7408C29.5339 11.573 29.5031 11.4062 29.4402 11.2506C29.3773 11.095 29.2838 10.9536 29.1651 10.8349C29.0464 10.7162 28.905 10.6226 28.7493 10.5597C28.5937 10.4969 28.427 10.466 28.2591 10.4689C28.0913 10.4719 27.9258 10.5086 27.7724 10.577C27.6191 10.6453 27.4811 10.7438 27.3667 10.8666L20 18.2333L12.6333 10.8666C12.3964 10.6458 12.083 10.5256 11.7591 10.5313C11.4353 10.537 11.1263 10.6682 10.8973 10.8972C10.6683 11.1262 10.5371 11.4352 10.5314 11.7591C10.5257 12.0829 10.6459 12.3963 10.8667 12.6333L18.2333 19.9999L10.8667 27.3666C10.6326 27.601 10.5011 27.9187 10.5011 28.2499C10.5011 28.5812 10.6326 28.8989 10.8667 29.1333C11.101 29.3673 11.4187 29.4988 11.75 29.4988C12.0812 29.4988 12.399 29.3673 12.6333 29.1333L20 21.7666L27.3667 29.1333C27.601 29.3673 27.9187 29.4988 28.25 29.4988C28.5813 29.4988 28.899 29.3673 29.1333 29.1333C29.3674 28.8989 29.4989 28.5812 29.4989 28.2499C29.4989 27.9187 29.3674 27.601 29.1333 27.3666L21.7667 19.9999Z"
                        fill="#2F3047"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========  mobile nav dropdown ======== */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="small:hidden h-screen absolute top-[6rem] right-0 w-full z-40"
              initial="closed"
              animate="open"
              exit="exit"
              variants={backgroundVariants}
            >
              <motion.ul
                variants={navVariants} // Control the staggering here
                className="absolute left-0 w-full h-full px-2 py-20 sm:px-3 flex flex-col justify-start gap-[3rem] bg-theme_peach-900 items-center capitalize  font-sans text-[1.9rem] text-black z-30"
              >
                {["Home", "About", "Services", "Projects", "Contact"].map(
                  (text, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <Link
                        href={
                          text.includes("Home")
                            ? "/"
                            : `/${text.toLowerCase().replace(" ", "")}`
                        }
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div className="flex flex-col justify-center text-center">
                          <span className="font-[300]">{text}</span>
                        </div>
                      </Link>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Navbar;
