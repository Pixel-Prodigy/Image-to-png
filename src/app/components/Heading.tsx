import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
export default function Heading({text , textClass , xClass}:{text: string , textClass?: string , xClass?: string}) {
  return (
    <>
      <motion.div className="mt-20">
        <motion.h1
          transition={{ duration: 3 }}
          className=" font-bold text-center font-mono flex items-center justify-center"
        >
          <motion.span
            initial={{ color: "#f29296", scale: 1.4 }}
            animate={{ color: "#ffffff", scale: 1 }}
            transition={{ type: "spring ",  stiffness: 300, damping: 30 }}
            className={` ${textClass}`}
          >
            {text}
          </motion.span>
          <motion.span
            className={` ml-2 ${xClass}`}
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
