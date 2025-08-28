"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Story = () => {
  // Track scroll for parallax
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, -80]);
  const story = useTransform(scrollY, [0, 800], [0, -70]);

  return (
    <div className="h-screen relative w-full overflow-hidden bg-neutral-900 text-center text-gray-200 -mt-[10vh] rounded-t-[60px] md:h-screen lg:h-screen">
      {/* background texture */}
      <div className="absolute inset-0 bg-[url(/grain2.jpg)] bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none"></div>

      {/* Main container for content */}
      <div className="absolute w-full flex flex-col md:flex-row md:justify-center md:items-center h-full px-6 py-12 md:px-12 lg:px-24">
        {/* Story Title */}
        <motion.div
          style={{ y: story }}
          className="md:order-1 text-left  w-full md:w-auto md:absolute md:right-auto md:top-12 md:left-12 lg:left-24 "
        >
          <h1 className="text-6xl md:text-8xl font-didot uppercase ">
            Our <br /> Story
          </h1>
        </motion.div>

        {/* Story Image */}
        <div className=" h-auto  md:mt-0 md:w-1/2 lg:w-2/5 order-3  flex justify-center ">
          <div className="relative w-full h-[60vh] md:h-[80vh] rounded-[4vw] overflow-hidden ">
            <Image
              src={"/story.png"}
              alt="Story"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Story Text */}
        <motion.div
          style={{ y: yBg }}
          className="md:order-2 w-full mt-6  md:mt-40  md:w-1/2 lg:w-2/5 p-4 text-left flex flex-col justify-center gap-4 md:gap-8 font-serif"
        >
          <h2 className="text-xl md:text-2xl">
            Born in India, Crafted for the World
          </h2>
          <p className="leading-7 text-sm md:text-base">
            Voida was born where legacy meets vision — in a small tailoring
            unit, surrounded by fabric rolls, chalk lines, and the rhythmic hum
            of sewing machines. The roots of Voida trace back to a father who
            spent his life mastering the art of tailoring. He didn’t just stitch
            clothes — he crafted character.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
