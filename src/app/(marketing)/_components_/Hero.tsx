"use client";
import CursorImage from "@/assets/images/cursor.png";
import MessageImage from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedGradientTextDemo } from "./animatedtext";

export const Hero = () => {
  return (
    <div className="relative overflow-clip bg-black bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] text-white sm:py-24">
      <div className="llg:h-[800px] absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:top-[calc(100%-120px)] sm:h-[768px] sm:w-[1536px] lg:w-[2400px]"></div>
      <div className="container relative">
        <div className="-mt-10 flex items-center justify-center">
          <AnimatedGradientTextDemo />
        </div>
        <div className="mt-8 flex justify-center ">
          <div className="relative inline-flex">
            <h1 className="tracking-tightner inline-flex text-center text-7xl font-bold sm:text-9xl">
              GCS
            </h1>
            <motion.div
              className="absolute right-[478px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                alt="cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[498px] top-[56px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                alt="cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="mt-8 max-w-md text-center text-xl">
            Experience Bufferless connectivity trusted by 1500 families -
            গোপীনাথপুর ক্যাবল সিস্টেম
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="rounded-lg bg-green-400 px-5 py-3 font-bold text-white">
            বিকাশ ও নগদ এর মাধ্যমে পেমেন্ট করুন
          </button>
        </div>
      </div>
    </div>
  );
};
