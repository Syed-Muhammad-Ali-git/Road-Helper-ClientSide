"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.24, ease: "easeIn" } },
};

export function MotionContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionContainer;
