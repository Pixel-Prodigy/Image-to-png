"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "../components/Heading";
import Link from "next/link";
export default function page() {
  return (
    <div className="w-full min-h-screen grid   grid-cols-1 place-items-center">
        <div className="absolute top-8">
          <Heading text="Select" xClass="text-[8rem]" textClass="text-7xl" />
        </div>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="bg-white rounded-md flex flex-col items-center p-4 w-full max-w-[400px] h-80"
      >
      
        <div className="grid grid-cols-2 gap-5">
          <Link href="/convert/imageToPng">
            <motion.button
              whileHover={{
                borderBottom: "2px solid lightblue",
                color: "blue",
                scale: 1.1,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="font-bold border-b-2 pb-1 text-xl"
            >
              Convert to PNG
            </motion.button>
          </Link>
          <Link href="/convert/compressImage">
            <motion.button
              whileHover={{
                borderBottom: "2px solid lightblue",
                color: "blue",
                scale: 1.1,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="font-bold border-b-2 pb-1 text-xl"
            >
              Compress Image
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
