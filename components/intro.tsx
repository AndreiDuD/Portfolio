"use client";

import profile from "@/app/profile.jpeg";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Intro() {
  const controls = useAnimation();
  const [reference, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref } = useSectionInView("Home", 0.2);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const itemVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "tween", duration: 0.2 },
    },
    hidden: { opacity: 0, scale: 0 },
  };
  const contactVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 },
    },
    hidden: { opacity: 0, y: 100 },
  };
  const spanVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      },
    },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      id="home"
      className="z-10 mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            ref={reference}
            animate={controls}
            initial="hidden"
            variants={itemVariants}
          >
            <Image
              src={profile}
              alt="profile image"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-[#97ab99] object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            ref={reference}
            animate={controls}
            initial="hidden"
            variants={spanVariants}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        ref={reference}
        animate={controls}
        initial="hidden"
        variants={itemVariants}
      >
        <span className="font-bold">Hello, I'm Andrei.</span> I'm working
        towards becoming a{" "}
        <span className="font-bold">full-stack developer </span>currently
        expanding my knowledge in building{" "}
        <span className="italic">sites & apps</span> focusing on{" "}
        <span className="underline">React(Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        ref={reference}
        animate={controls}
        initial="hidden"
        variants={contactVariants}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <div className="flex gap-2">
          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/andrei-dud"
            target="_blank"
          >
            <LinkedinIcon className="w-4" />
          </a>

          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/AndreiDuD"
            target="_blank"
          >
            <GithubIcon className="w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
