"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  // //   const containerRef = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ["start start", "end start"],
  //   });
  //   const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]); // Fades out a bit before full cover
  //   const heroBlur = useTransform(
  //     scrollYProgress,
  //     [0, 0.25],
  //     ["blur(0px)", "blur(10px)"]
  //   );

  return (
    // <motion.div
    //   style={{ opacity: heroOpacity, filter: heroBlur }}
    //   className="sticky top-0 flex h-screen w-full items-center justify-center z-10"
    // >
    <section className="h-[110vh] w-full bg-cover bg-[url(../../public/hero2.png)] ">
      <div className="absolute inset-0 bg-[url(/grain2.jpg)] bg-cover h-[110vh] bg-center opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="flex h-full relative flex-col justify-center  text-white  items-center">
        <h1 className="text-8xl font-bold font-didot mt-6 text-center">
          VOIDA
          <br />
          CLOTHING
        </h1>
        <p className="text-2xl mt-6 font-serif text-gray-300">
          Your essentials, your style, your story
        </p>

        <button className="bg-white/5 flex justify-center items-center gap-1 hover:gap-3 transition-all duration-300 ease-out backdrop-blur-xs text-lg  p-4 mt-10 px-8 cursor-pointer rounded-4xl">
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
        </button>
      </div>
    </section>
    // </motion.div>
  );
}
