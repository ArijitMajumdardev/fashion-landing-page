"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll for parallax
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, -80]); // background moves slower

  return (
    <section
      ref={ref}
      className="relative h-[110vh] w-full bg-cover bg-[url(../../public/hero2.png)]"
    >
      {/* Background overlay with parallax */}
      <motion.div
        
        className="absolute inset-0 bg-[url(/grain2.jpg)] bg-cover h-[110vh] bg-center opacity-20 mix-blend-overlay pointer-events-none"
      ></motion.div>

      {/* Foreground content */}
      <motion.div style={{ y: yBg }} className="flex h-full relative flex-col justify-center text-white items-center">
        {/* Heading animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-didot mt-6 text-center"
        >
          VOIDA
          <br />
          CLOTHING
        </motion.h1>

        {/* Subtitle animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl mt-6 font-serif text-gray-300 text-center px-4"
        >
          Your essentials, your style, your story
        </motion.p>

        {/* Button animation */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 flex justify-center items-center gap-1 hover:gap-3 transition-all duration-300 ease-out backdrop-blur-xs text-lg p-4 mt-10 px-8 cursor-pointer rounded-4xl"
        >
          <span>Shop Now</span>
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
            className="lucide lucide-arrow-right-icon lucide-arrow-right "
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
