import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
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
    title: "TIET'25",
    location: "Patiala, Punjab",
    description:
      "I am currently enrolled in a four-year bachelor's engineering program.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Tech-Head",
    location: "OWASP TIET",
    description:
      "As the Tech Lead at our university, I take great pride in fostering a collaborative environment that encourages innovation and learning. Leading a GitHub-sponsored hackathon",
      icon: React.createElement(FaUserGraduate),
    date: "2022 - 2023",
  },
  {
    title: "Web-Dev Mentor",
    location: "OWASP TIET",
    description:
      "I currently hold the role of web development mentor at OWASP-TIET, guiding and supporting fellow students in mastering the intricacies of web development.",
      icon: React.createElement(FaUserGraduate),
    date: "2023 - present",
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
  "Rust",
  "MongoDB",
  "Redux",
  "GraphQL",
  "REST",
  "Material-UI",
  "Express",
  "PostgreSQL",
  "Python",
  "C++",
  "Framer Motion",
] as const;