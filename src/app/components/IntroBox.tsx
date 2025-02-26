"use client";
import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Context } from "./Context";

export default function IntroBox() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("context problem in IntroBox");
  const { setImageValue, imgValue } = ctx;
  const [preview, setPreview] = useState<string | null>(null);

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
      className="bg-white relative p-10 w-2/3 h-full shadow-md rounded-md flex items-center justify-center"
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
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="max-w-full max-h-full object-cover rounded-md"
          />
        ) : (
          <motion.span className="text-6xl font-bold text-inherit">
            Drop File
          </motion.span>
        )}
      </motion.div>

      <motion.div
        initial={{ translateY: 100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        className="absolute -bottom-14 flex justify-center w-full"
      >
        {imgValue ? (
          <motion.button
            className="rounded-md px-6 py-2 bg-blue-500 text-white font-bold cursor-pointer"
            onClick={() => {
              setImageValue(null);
              setPreview(null);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Remove
          </motion.button>
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
