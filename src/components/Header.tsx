"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 h-18 w-full flex   md:justify-around transition-colors duration-500 text-gray-300`}
    >

      <div className=" w-full md:hidden h-full relative ">
              <button className="cursor-pointer md:hidden relative left-4 top-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu-icon lucide-menu"
        >
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <path d="M4 6h16" />
        </svg>
        </button>
        <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="font-extrabold font-didot text-4xl ">VOIDA</h1>

        </div>
      </div>


      <div className="w-4/10 hidden md:flex">
        <div className=" flex justify-center items-center md:gap-6 lg:gap-10 ml-10">
          {["Home", "Shop", "About Us", "Blog"].map((item) => (
            <motion.div key={item}>
              <Link href={"#"} className="relative group">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-2/10 md:flex justify-center items-center  hidden ">
        <h1 className="font-extrabold font-didot text-4xl ">VOIDA</h1>
      </div>

      <div className="w-4/10 hidden  md:flex justify-end items-center gap-6 pr-6">
        <Link href={"#"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search-icon lucide-search"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </Link>
        <Link href={"#"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </Link>
        <Link href={"#"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-user-icon lucide-circle-user"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
