import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <div className="relative h-screen w-full bg-neutral-900 text-center text-gray-200 -mt-[10vh] rounded-t-[60px]">
      {/* <div className="relative h-screen w-full bg-neutral-900 text-center text-gray-200 -mt-[10vh]
        [clip-path:polygon(0%_calc(0%_-_4000%),55%_6%,calc(100%_-_26%)_calc(90%_-_84%),400%_3rem,100%_100%,0%_100%)]"> */}

      {/* background texture */}
      <div className="absolute inset-0 bg-[url(/grain2.jpg)] bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none"></div>

      <h1 className="text-8xl font-didot uppercase text-left w-3xs absolute right-72 top-6 z-10">
        Our <br />
        Story
      </h1>

      <div className="w-[28vw] h-[80vh] absolute right-6 top-16 bg-amber-400 rounded-[4vw]">
        <Image
          src={"/story.png"}
          alt="Story"
          height={1000}
          width={500}
          className="object-contain rounded-[4vw]"
        />
      </div>

      <div className="w-2/5 p-4 mb-2 h-3/6  text-left absolute bottom-20 left-10 flex flex-col justify-center gap-8 font-serif">
        <h2 className="text-2xl">Born in India, Crafted for the World</h2>
        <p className="leading-7">
          Voida was born where legacy meets vision — in a small tailoring unit,
          surrounded by fabric rolls, chalk lines, and the rhythmic hum of
          sewing machines. The roots of Voida trace back to a father who spent
          his life mastering the art of tailoring. He didn’t just stitch clothes
          — he crafted character.
        </p>
      </div>
    </div>
  );
};

export default Story;
