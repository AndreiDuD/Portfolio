"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");
  const controls = useAnimation();
  const [reference, inView] = useInView({
    triggerOnce: false,
    threshold: 0.175,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const aboutVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.175 },
    },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      ref={reference}
      animate={controls}
      initial="hidden"
      variants={aboutVariants}
    >
      <section
        ref={ref}
        className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
        id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          After graduating with a degree in{" "}
          <span className="font-medium">Computer Science</span>, I decided to
          pursue my passion for programming. I enrolled in several courses to
          become a <span className="font-medium">full-stack web developer</span>
          . <span className="italic">My favorite part of programming</span> is
          the problem-solving aspect. I <span className="underline">love</span>{" "}
          the feeling of finally figuring out a solution to a problem. My core
          stack is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with TypeScript and Prisma. I am always looking
          to learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </p>

        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games, working out or playing volleyball. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am
          currently learning about{" "}
          <span className="font-medium">psychology and history</span>.
        </p>
      </section>
    </motion.div>
  );
}
