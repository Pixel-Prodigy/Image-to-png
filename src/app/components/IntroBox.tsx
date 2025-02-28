"use client";
import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Context } from "./Context";
import { FaTrash, FaThumbsUp } from "react-icons/fa";

import Link from "next/link";

export default function IntroBox() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("context problem in IntroBox");
  const { setImageValue, imgValue, setPreview, preview } = ctx;

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setImageValue(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImageValue(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="bg-white relative p-10 w-2/3 h-full shadow-md rounded-md flex items-center py-10 justify-center"
    >
      <motion.div
        initial={{ scale: 0.3, color: "#919191", border: "5px dotted #919191" }}
        animate={{ scale: 1 }}
        whileHover={{
          color: "#f99296",
          border: "5px dotted #f99692",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="w-full grid place-items-center p-2 rounded-[10px] h-full"
      >
        <AnimatePresence>
        {preview && (
          <motion.img
          exit={{width: 100}}
            src={preview}
            alt="Preview"
            className="max-w-full max-h-full object-cover rounded-md"
          /> 

        )}
        </AnimatePresence>
        <AnimatePresence>
         {!preview && (
          <motion.span 
          exit={{scale: 0.5}}
          className="text-6xl font-bold text-inherit">
            Drop File
          </motion.span>
        )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ translateY: 100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        className="absolute -bottom-14 flex justify-center w-full"
      >
        {imgValue ? (
          <motion.div
            initial={{ display: "block", gap: "3px" }}
            animate={{ display: "flex", gap: "50px" }}
            transition={{
              type: "spring",
              stifness: 300,
              damping: 30,
              duration: 1.2,
            }}
          >
            <Link href="/convert">
              <motion.button
                className="rounded-md px-6 py-2 flex h-10 gap-2 items-center  font-bold cursor-pointer"
                initial={{
                  background: "orange",
                  border: "none",
                  color: "white",
                }}
                whileHover={{
                  background: "black",
                  border: "1px solid orange",
                  color: "orange",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.8,
                }}
              >
                Ready <FaThumbsUp />
              </motion.button>
            </Link>
            <motion.button
              className="rounded-md px-3 flex h-10 gap-2 items-center py-2 bg-red-500 text-white font-bold cursor-pointer"
              onClick={() => {
                setImageValue(null);
                setPreview(undefined);
              }}
              initial={{
                background: "#ef4444",
                border: "none",
                color: "white",
              }}
              whileHover={{
                background: "black",
                border: "1px solid #ef4444",
                color: "#ef4444",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Remove
              <FaTrash />
            </motion.button>
          </motion.div>
        ) : (
          <motion.input
            type="file"
            className="rounded-md px-6 py-2 bg-blue-500 text-white font-bold cursor-pointer"
            onChange={handleFileSelect}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
