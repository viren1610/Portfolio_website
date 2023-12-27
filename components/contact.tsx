"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 
    w-[min(100%,38rem)] 
    text-center "
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <SectionHeading>Contact Me 📭</SectionHeading>
      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:virenplays@gmail.com">
          virenplays@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          console.log("Running on Client");
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));
          await sendEmail(formData);
        }}
      >
        <input
          name="senderEmail"
          placeholder="Your Email"
          className="h-14 px-4 rounded-lg borderBlack "
          type="email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          required
          maxLength={5000}
        />
        <button
          className="group flex items-center 
          justify-center gap-2 h-[3rem] w-[8rem]
           bg-gray-900 text-white rounded-full 
           outline-none transition-all
           focus:scale-110 active:scale-105
           hover:scale-110"
          type="submit"
        >
          Send{" "}
          <FaPaperPlane
            className="text-xs opacity-70 
          transition-all group-hover:translate-x-1
          group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
}
