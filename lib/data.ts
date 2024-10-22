import blogImg from "@/public/blog.png";
import hivetechImg from "@/public/hivetech.png";
import React from "react";
import { AiOutlineAudit } from "react-icons/ai";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    hash: "https://andrei-dev-portfolio.vercel.app/",
  },
] as const;

export const experiencesData = [
  {
    title: "IS Auditor",
    location: "Bucharest, RO",
    description:
      "As an IT Auditor, my primary responsibility is to assess and evaluate the IT infrastructure and security systems of our clients' organizations. I work diligently to ensure that their internal applications and overall IT environment adhere to the standards and best practices in the realm of IT security. Through a combination of comprehensive audits, risk assessments, and compliance checks, I aim to identify vulnerabilities, weaknesses, and areas for improvement. By providing detailed insights and recommendations, I help our clients fortify their IT defenses, mitigate risks, and maintain the integrity and confidentiality of their data, thereby contributing to the overall security and efficiency of their operations. My role is pivotal in safeguarding critical information assets and promoting a culture of secure and robust IT practices.",
    icon: React.createElement(AiOutlineAudit),
    date: "Sep, 2022 - Present",
  },
  {
    title: "Business Intelligence Specialist",
    location: "Bucharest, RO",
    description:
      "As a BI Specialist, I had the opportunity to engage in a diverse range of projects that showcased my proficiency in both web development and data analysis. One of the highlights of my role was the creation of a promotional website for business intelligence products. This website, developed using React and Vue, was hosted on Azure using a suite of Azure services such as Azure Functions, Azure Web App, and Azure Storage. I played a pivotal role in designing and developing the web application, ensuring a seamless user experience.",
    icon: React.createElement(FaReact),
    date: "Sep, 2022 - Sep, 2023",
  },
  {
    title: "Graduated Middlesex University",
    location: "Middlesex, UK",
    description:
      "I graduated after 3 years of studying Computer Science and started looking for a job in the tech industry.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
  {
    title: "Information Technology Auditor",
    location: "Bucharest, RO",
    description:
      "As an IT Auditor, my primary responsibility is to assess and evaluate the IT infrastructure and security systems of our clients' organizations. I work diligently to ensure that their internal applications and overall IT environment adhere to the standards and best practices in the realm of IT security. Through a combination of comprehensive audits, risk assessments, and compliance checks, I aim to identify vulnerabilities, weaknesses, and areas for improvement. By providing detailed insights and recommendations, I help our clients fortify their IT defenses, mitigate risks, and maintain the integrity and confidentiality of their data, thereby contributing to the overall security and efficiency of their operations. My role is pivotal in safeguarding critical information assets and promoting a culture of secure and robust IT practices.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Hivetech",
    description:
      "Presentation website for a company looking to provide online services to it's customers.",
    tags: ["React", "Vite.js", "TailwindCSS", "Auth0", "Three"],
    imageUrl: hivetechImg,
    projectLink: "https://hivetech-sample.vercel.app/",
  },
  {
    title: "Blog",
    description:
      "During my journey I have created a blog which showcases some of the things I have learnt along the way.",
    tags: ["HUGO", "GO", "HTML", "CSS", "JavaScript"],
    imageUrl: blogImg,
    projectLink: "https://andrei-dev-portfolio.vercel.app/#contact",
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
