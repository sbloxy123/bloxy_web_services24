import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="text-theme_black-900  py-14 w-screen bg-theme_peach-900 text-center ">
      <Link className="block w-[100px] mx-auto" href="/">
        <Image
          alt="logo"
          src="/images/icons/logo.svg"
          className=" w-full object-contain"
          height={100}
          width={100}
        />
      </Link>
      <br />
      <div className="mb-8 ">
        <Link
          className="text-2xl md:text-4xl font-[400] uppercase tracking-widest"
          href="/"
        >
          Bloxie
        </Link>
      </div>
      <p className="capitalize text-[1.6rem] font-[300]">
        Professional Website Designer and Developer
      </p>
      <div className=" w-full m-auto my-16">
        <p className="font-[300] leading-3 pb-2">
          Tel:{" "}
          <a
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300 px-2 font-[400]"
            href="tel:07806615231"
          >
            07806 615231
          </a>
        </p>
        <br />
        <p className="font-[300] leading-3">
          Email: <span className="px-2 font-[400]">stuart@bloxie.co.uk</span>
        </p>
      </div>
      <div className="border-b border-theme_black-900 w-[80%] m-auto mb-10"></div>
      {/* <hr className="my-10 h-1 mb-8 w-[50%] mx-auto  bg-theme_black-900"></hr> */}
      <ul className="p-0 mb-16 text-theme_black-900 px-layout-small xsmall:flex xsmall:flex-wrap xsmall:justify-center small:px-0 small:max-w-[500px] small:mx-auto">
        <li className="w-fit m-auto my-2">
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/"
          >
            <p className="py-1 px-4">Home</p>
          </Link>
        </li>
        <li className="w-fit m-auto my-2">
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/services/"
          >
            <p className="py-1 px-4">Services</p>
          </Link>
        </li>
        <li className="w-fit m-auto my-2">
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/projects/"
          >
            <p className="py-1 px-4">Projects</p>
          </Link>
        </li>
        <li className="w-fit m-auto my-2">
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/information/"
          >
            <p className="py-1 px-4">About</p>
          </Link>
        </li>
        <li className="w-fit m-auto my-2">
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/contact/"
          >
            <p className="py-1 px-4">Get in touch</p>
          </Link>
        </li>
      </ul>
      <address>
        © Copyright SJ Bloxham Ltd -<span> Hertfordshire, UK</span>
      </address>
    </footer>
  );
};
