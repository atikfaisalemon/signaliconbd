"use client";
import HelixImage from "@/assets/images/helix2.png";
import EmojiImage from "@/assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { use, useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className="bg-black py-[72px] text-white sm:py-24" ref={containerRef}>
      <div className="container relative max-w-xl">
        <motion.div style={{ translateY }}>
          <Image
            src={HelixImage}
            alt="helix"
            className="absolute left-[calc(100%+36px)] top-6"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={EmojiImage}
            alt="emoji"
            className="absolute -top-[120px] right-[calc(100%+30px)]"
          />
        </motion.div>

        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">
          Get Instant Access
        </h2>
        <p className="mt-5 text-xl  text-white/70">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
          veritatis? Omnis minima quisquam error accusamus?
        </p>
        <form className="mx-auto mt-10 flex max-w-sm flex-col gap-2.5 sm:flex-row">
          <input
            type="email"
            placeholder="karthikmudunuri999@gmail.com"
            className="h-12 rounded-lg bg-white/20 px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="h-12 rounded-lg bg-white px-5 text-black">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
