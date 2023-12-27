"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.075 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section
      className="mb-28 max-w-[53rem] 
    scroll-mt-28 text-center
     sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul
        className="flex flex-wrap justify-center 
      gap-2 text-lg text-gray-800"
      >
        {skillsData.map((skills, index) => (
          <motion.li
            className=" bg-white border border-black/[0.1]
           rounded-xl px-5 py-3 dark:bg-white/10
           dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skills}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
