"use client";
import Image from "next/image";
import BGImage from "@/public/assets/bg-slate.png";
import { motion } from "framer-motion";
import Header from "@/components/Header";

// Parent container animation (stagger effect)
const containerVariant = {
  initial: { opacity: 0 }, // Ensure container starts invisible
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Individual child animations
const childrenVariant = {
  initial: { y: -100, opacity: 0.35 },
  animate: {
    y: 0,
    opacity: 0.35,
    transition: {
      duration: 0.6,
      ease: "linear",
      repeat: Infinity, // Loops forever
      repeatType: "reverse" as const,
    },
  },
};

const variant2 = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const variant3 = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="min-h-[700px] xl:min-h-screen w-full relative">
      {/* Background Image */}
      <Image
        src={BGImage}
        alt="Hero section background"
        fill
        className="object-cover object-center -z-10"
        quality={100}
        priority
      />
      {/* Background playstation buttons */}
      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="animate"
        className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-4 -z-10"
      >
        {/* ⭕ Circle */}
        <motion.div
          variants={childrenVariant}
          className="h-[70px] w-[70px] border-[7px] border-primary rounded-full"
        ></motion.div>

        {/* 🟩 Triangle */}
        <motion.svg
          variants={childrenVariant}
          width="70"
          height="70"
          viewBox="0 0 200 200"
          className="stroke-green-500 stroke-[7] fill-transparent"
        >
          <polygon points="100,20 20,180 180,180" />
        </motion.svg>

        {/* ❌ Cross */}
        <motion.svg
          variants={childrenVariant}
          width="70"
          height="70"
          viewBox="0 0 200 200"
          className="stroke-red-500 stroke-[7] fill-transparent"
        >
          <line x1="20" y1="20" x2="180" y2="180" />
          <line x1="180" y1="20" x2="20" y2="180" />
        </motion.svg>

        {/* 🟥 Square */}
        <motion.div
          variants={childrenVariant}
          className="h-[70px] w-[70px] border-[7px] border-blue-500"
        ></motion.div>
      </motion.div>

      <div className="absolute -z-10 top-14 right-0 md:right-2 2xl:right-10 hidden lg:block">
        <h1 className="text-[6rem] 2xl:text-9xl  text-darkGray/60 font-bold leading-none ">
          Gaming <br /> Redefined
        </h1>
      </div>
      {/* Header section */}
      <Header  />
      {/* Hero Content */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-28 sm:pt-32 md:pt-20 place-items-center">
          {/* Text section */}
          <div className="text-white mt-[20px] sm:mt-2 md:mt-4 p-4">
            <motion.div
              variants={variant2}
              initial="initial"
              whileInView="animate"
              className="relative"
            >
              <div className="relative f z-10 space-y-4">
                <h1 className="text-2xl">
                  Level <span className="text-primary">Up</span>. Game{" "}
                  <span className="text-primary">On</span>.
                </h1>
                <p className="text-sm leading-loose">
                  At BossFight, we fuel every gamer&apos;s passion with top-tier
                  gaming gear, cutting-edge consoles, and pro-level accessories.
                  Experience unmatched precision, durability, and performance,
                  designed for those who play to win!
                </p>
              </div>
              <div className="absolute -top-6 -left-6 w-[250px] h-[190px] bg-gray-700/40"></div>
            </motion.div>
          </div>
          <motion.div
            variants={variant3}
            initial="initial"
            whileInView="animate"
            className="relative text-white mt-10 md:mt-64"
          >
            <h1 className="text-2xl text-end">
              <span className="text-primary">Get</span> your{" "}
              <span className="text-primary">Gears</span> loaded
            </h1>
            <p className="text-sm leading-loose text-end">
              At BossFight, we bring you the best gaming brands—Alienware,
              Logitech, Razer, Mad Catz, and Turtle Beach—ensuring precision,
              speed, and immersive performance for every gamer. Upgrade now!
            </p>
            <div className="absolute -top-6 -right-6 w-[250px] h-[190px] bg-darkGray/50 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
