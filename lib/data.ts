import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chatApp from "@/public/chatapp.png";
import hacko from "@/public/hackoproject.png";
import sihf from '@/public/SIHfrontend.jpg'
import honey from "@/public/honey_extension.png"
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Glific Chat App",
    description:
      "Glific Chat application delivers a seamless real-time communication experience. With its user-friendly interface and robust functionality. ",
    tags: ["React", "Node", "Express", "Material-UI","Redux","MongoDB","React-Hook-Forms","Socket.IO"],
    imageUrl: chatApp,
  },
  {
    title: "HackOwasp 5.0",
    description:
      "As the tech lead, I spearheaded the creation of the hackathon website for a GitHub-sponsored event. Leveraging my skills and expertise.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: hacko,
  },
   {
     title: "Neer (नीर)",
     description:
       "Our SIH finalist project, an innovative admin dashboard, revolutionizes pipeline maintenance by detecting cracks swiftly and efficiently.",
     tags: ["React", "Node", "Express", "Material-UI", "MongoDB","AWS","Node-Cron"],
     imageUrl: sihf,
   },
   {
     title: "Coupon Sleuth",
     description:
       "Introducing Coupon Sleuth, the essential Chrome extension that effortlessly scours the web, extracting hidden discount codes for savvy online shoppers",
     tags: ["HTML","CSS","Javascript","Chrome Extension APIs"],
     imageUrl: honey,
   },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;