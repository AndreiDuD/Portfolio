import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import { LuGraduationCap } from "react-icons/lu";

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
  {
    name: "Blog",
    hash: "https://www.markdownguide.org/cheat-sheet/",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Middlesex University",
    location: "Middlesex, UK",
    description:
      "I graduated after 3 years of studying Computer Science and started looking for a job in the tech industry.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
  {
    title: "IT Specialist",
    location: "Bucharest, RO",
    description:
      "I'm now working as a Data Analyst at BDO - Romania to expand my current knowledge about the current tech industry standards for security and data. In this time I have worked on one of my biggest full-stack projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Blog",
    description:
      "During my full-stack developer journey I have created a blog which showcases some of the things I have learnt along the way.",
    tags: ["React", "Next.js", "Tailwind", "Content Layer"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
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
  "Express",
  "Python",
  "Daisyui",
  "Framer Motion",
] as const;
