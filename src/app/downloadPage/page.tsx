"use client";
import React, { useEffect, useContext } from "react";
import { Context } from "../components/Context";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { div } from "framer-motion/client";
export default function Page() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("Context problem in downloadPage/page");

  const { convertedUrl, preview, setImageValue, setPreview } = ctx;
  const router = useRouter();

  useEffect(() => {
    if (!convertedUrl || !preview) router.push("/");
  }, [convertedUrl, preview]);

  return (
    <motion.div
      initial={{ scale: 0.6, filter: "blur(2.5rem)" }}
      animate={{ scale: 1, filter: "none" }}
      className="flex flex-col items-center justify-center h-screen text-white"
    >
      <h2 className="text-lg font-bold mb-4">Download your PNG Image</h2>
      {preview && (
        <img
          src={preview}
          className="max-w-[400px] max-h-[400px] object-cover rounded-lg"
          alt="Converted Preview"
        />
      )}
      {convertedUrl && (
        <div>
          <motion.button
            onClick={() => {
              const url = URL.createObjectURL(convertedUrl);
              const a = document.createElement("a");
              a.href = url;
              a.download = "ImageX";
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }}
            transition={{
              type: "spring",
              duration: 0.7,
              stiffness: 300,
              damping: 30,
            }}
            whileHover={{
              rotateX: 25,
              scale: 1.4,
              translateY: -10,
              rotateZ: 8,
              background: "transparent",
              border: "1px solid blue",
              color: "blue",
              perspective: 1000,
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="mt-4 px-4 py-2 bg-blue-500 mr-10 hover:bg-blue-600 text-white font-bold rounded"
          >
            Download PNG
          </motion.button>
          <Link href="/">
            <motion.button
              className="bg-red-500 px-6 h-10 rounded-md text-white font-bold shadow-lg "
              whileHover={{
                rotateX: -25,
                scale: 1.4,
                translateY: -10,
                rotateZ: -8,
                background: "transparent",
                border: "1px solid red",
                color: "red",
                perspective: 1000,
              }}
              transition={{
                type: "spring",
                duration: 0.7,
                stiffness: 300,
                damping: 30,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Go Back
            </motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  );
}
