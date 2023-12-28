"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilepic from "@/public/virenprofilepic.jpg";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-m-[100rem]">
      {/* image */}
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* to animate the component */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              alt="Viren Potrait"
              src={profilepic}
              width="256"
              height="256"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className=" absolute bottom-0 right-0 text-4xl "
          >
            👋
          </motion.span>
        </div>
      </div>
      {/* Intro */}
      <motion.h1
        className=" mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Viren.</span> I'm a{" "}
        <span className="font-bold">Full-stack developer</span> from{" "}
        <span className="font-bold">India.</span> I enjoy building{" "}
        <span className="italic">
          seamless and visually appealing digital experiences
        </span>
        . My focus is currently on{" "}
        <span className="underline">Rust (Web-3)</span>.
      </motion.h1>
      {/* Links */}
      <motion.div
        className="flex  flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2
           rounded-full outline-none focus:scale-110 hover:scale-110
            hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a className="group bg-white px-7 py-3 flex items-center gap-2 
        rounded-full outline-none focus:scale-110 hover:scale-110 
        active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10" href="/VirenWalia.pdf" download>
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110
        active:scale-110 hover:scale-110 hover:text-gray-950 transition 
        cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
         href="https://www.linkedin.com/in/viren-walia-569543246/" target="_blank">
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2
         text-[1.35rem] rounded-full hover:scale-110 hover:text-gray-950 focus:scale-110 
         active:scale-105 transition cursor-pointer border border-balck/10  dark:bg-white/10 dark:text-white/60"
         href="https://github.com/viren1610" target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
