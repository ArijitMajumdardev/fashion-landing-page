"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";

// Animation variants for stagger effect
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const FeaturedProducts = () => {
  return (
    <div className="min-h-screen w-full bg-black text-center pt-1 text-gray-200 font-didot">
      <h1 className="text-2xl uppercase mt-6">Timeless Classics</h1>

      {/* Category buttons */}
      <div className="w-full h-20 mt-10 flex flex-wrap">
        <div className="h-full w-full  md:w-2/4 flex justify-center  gap-4 px-4 items-center">
          <button className="bg-gray-200 text-black w-24 h-8 rounded-full cursor-pointer">All</button>
          <button className="bg-neutral-900 w-24 h-8 rounded-full cursor-pointer ">T-shirts</button>
          <button className="bg-neutral-900 w-24 h-8 rounded-full cursor-pointer">Pants</button>
          <button className="bg-neutral-900 w-24 h-8 rounded-full cursor-pointer">Jackets</button>
           <button className="bg-neutral-900 w-24 h-8 cursor-pointer rounded-full md:hidden flex justify-center gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-funnel"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            <span>Filter</span>
          </button>
          
        </div>
        <div className="h-full w-full sm:w-2/4 hidden md:flex justify-center sm:justify-end items-center px-10 mt-4 sm:mt-0">
          <button className="bg-neutral-900 w-24 h-8 cursor-pointer rounded-full flex justify-center gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-funnel"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Products with animation */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-wrap justify-center items-start px-8 gap-10 mt-10"
      >
        {[
          { img: "/jacket.jpg", name: "Suede Jeans", price: "$29.99" },
          { img: "/jeans.jpg", name: "Relaxed Fit Jeans", price: "$19.99" },
          { img: "/tshirt.jpg", name: "Beige Polo T-shirt", price: "$14.99" },
          { img: "/shirt.jpg", name: "Grey Striped Shirt", price: "$15.99" },
        ].map((product, index) => (
          <motion.div
            key={index}
            variants={item}
            className="w-60 flex flex-col justify-start gap-4 cursor-pointer"
          >
            {/* Wrapper keeps fixed size, image scales inside */}
            <div className="overflow-hidden rounded-3xl h-80 w-full">
              <motion.img
                src={product.img}
                alt={product.name}
                className="object-cover h-full w-full hover:opacity-80 transition-opacity ease-in-out"
                whileHover={{ scale: 1.03}}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="w-60 h-10 flex flex-col items-start px-3">
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
