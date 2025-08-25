import Image from "next/image";
import React from "react";

export const FeaturedProducts = () => {
  return (
    <div className="h-screen w-full bg-black text-center pt-1 text-gray-200   font-didot">
      <h1 className="text-2xl uppercase  mt-6">Timeless Classics</h1>
      <div className=" w-full h-20 mt-10 flex">
        <div className="h-full w-2/4 flex justify-start gap-4 px-4 items-center">
          <button className="bg-gray-200 text-black w-24 h-8 rounded-full cursor-pointer">
            All
          </button>
          <button className="bg-neutral-900 w-24 h-8 rounded-full cursor-pointer">
            T-shirts
          </button>
          <button className="bg-neutral-900 w-24 h-8 rounded-full cursor-pointer">
            Pants
          </button>
          <button className="bg-neutral-900 w-24 h-8 rounded-full cursor-pointer">
            Jacktes
          </button>
        </div>
        <div className="h-full w-2/4 flex justify-end items-center px-10 ">
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
              className="lucide lucide-funnel-icon lucide-funnel"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="w-full h-100  flex justify-center items-start px-8 gap-16 mt-10">
        {/* <div className="w-60 h-90   relative">
          <Image src={"/jacket.jpg"} alt="Jackte" width={2000} height={2000} className="object-cover  rounded-3xl h-full w-full" />
          <div className="w-57 h-12 bg-white/10 backdrop-blur-2xl rounded-lg absolute bottom-2 left-1.5 flex flex-col items-start px-3">
            <span>Relaxed Fit Jeans</span>
            <span>$19.99</span>
          </div>
        </div> */}
        <div className="w-60 h-100 flex flex-col justify-start gap-4">
          <Image
            src={"/jacket.jpg"}
            alt="Jackte"
            width={2000}
            height={2000}
            className="object-cover  rounded-3xl h-80 w-full"
          />
          <div className="w-60 h-10 flex flex-col items-start px-3">
            <span>Suede Jeans</span>
            <span>$29.99</span>
          </div>
        </div>
        <div className="w-60 h-100 flex flex-col justify-start gap-4">
          <Image
            src={"/jeans.jpg"}
            alt="Jackte"
            width={2000}
            height={2000}
            className="object-cover  rounded-3xl h-80 w-full"
          />
          <div className="w-60 h-10 flex flex-col items-start px-3">
            <span>Relaxed Fit Jeans</span>
            <span>$19.99</span>
          </div>
        </div>
        <div className="w-60 h-100 flex flex-col justify-start gap-4">
          <Image
            src={"/tshirt.jpg"}
            alt="Jackte"
            width={2000}
            height={2000}
            className="object-cover  rounded-3xl h-80 w-full"
          />
          <div className="w-60 h-10 flex flex-col items-start px-3">
            <span>Beige Polo T-shirt</span>
            <span>$14.99</span>
          </div>
        </div>
        <div className="w-60 h-100 flex flex-col justify-start gap-4">
          <Image
            src={"/shirt.jpg"}
            alt="Jackte"
            width={2000}
            height={2000}
            className="object-cover  rounded-3xl h-80 w-full"
          />
          <div className="w-60 h-10 flex flex-col items-start px-3">
            <span>Grey Striped Shirt</span>
            <span>$15.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};
