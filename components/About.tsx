'use client'
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.div initial={{opacity: 0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.3 }}
    id="about"
    className="scroll-mt-28 "
    >
      <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3 ">
          I'm pursuing my degree in{" "}
          <span className="font-medium">Electrical Engineering</span>, I decided
          to follow my passion for programming. I'm Self Taught{" "}
          <span className="font-medium">in full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with TypeScript and Rust. I am always looking to
          learn new technologies. I am currently looking for an{" "}
          <span className="font-medium">Intern</span> as a software
          developer.
        </p>

        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games,creating animation sequences, and playing with my dog. I
          also enjoy <span className="font-medium">learning new things</span>. I
          am currently learning about{" "}
          <span className="font-medium">space and all those astronomical phenomenon 🚀</span>. I'm also
          learning how to play electric guitar..
        </p>
      </section>
    </motion.div>
  );
}
