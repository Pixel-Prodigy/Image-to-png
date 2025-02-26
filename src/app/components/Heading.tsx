import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
export default function Heading() {
  return (
    <>
      <motion.div className="mt-20">
        <motion.h1
          transition={{ duration: 3 }}
          className="text-6xl font-bold text-center font-mono flex items-center justify-center"
        >
          <motion.span
            initial={{ color: "#f29296", scale: 1.4 }}
            animate={{ color: "#ffffff", scale: 1 }}
            transition={{ type: "spring ",  stiffness: 300, damping: 30 }}
            className="text-8xl"
          >
            Image
          </motion.span>
          <motion.span
            className="text-[12rem] ml-2"
            initial={{ color: "#ffffff", scale: 0.4 }}
            animate={{ color: "#f29296", scale: 1 }}
            transition={{ type: "spring ",  stiffness: 300, damping: 30 }}
          >
            X
          </motion.span>
        </motion.h1>
      </motion.div>
    </>
  );
}
