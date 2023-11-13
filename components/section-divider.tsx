"use client";

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionDivider() {
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

  const sectionVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.125 },
    },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <motion.div
      className="my-24 hidden h-16 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 sm:block"
      ref={reference}
      animate={controls}
      initial="hidden"
      variants={sectionVariants}
    ></motion.div>
  );
}
