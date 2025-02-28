import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "@/app/components/Context";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ButtonsProps = {
  heading: string;
  onConvert?: () => void;
  props?: any;
  link?: string;
};

export default function Buttons({
  heading,
  onConvert,
  link,
  ...props
}: ButtonsProps) {
  const ctx = useContext(Context);
  const router = useRouter();
  if (!ctx) throw new Error("Context problem in convert/page");

  const { preview } = ctx;

  return (
    <motion.div
      className="flex flex-col mt-40 items-center gap-6"
      initial={{ scale: 0.6, filter: "blur(2.5rem)" }}
      animate={{ scale: 1, filter: "none" }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <motion.h2 className="text-white text-5xl font-bold">{heading}</motion.h2>

      {preview && (
        <Image
          src={preview}
          alt="Preview"
          width={400}
          height={300}
          className="max-w-[400px] rounded-md shadow-lg"
        />
      )}

      <div className="flex gap-6 justify-center">
        <motion.button
          className="bg-blue-500 px-6 h-10 rounded-md text-white font-bold shadow-lg"
          type="button"
          transition={{
            type: "spring",
            duration: 0.7,
            stiffness: 300,
            damping: 30,
          }}
          whileHover={{
            rotateX: 15,
            scale: 1.2,
            translateY: -5,
            rotateZ: 5,
            background: "transparent",
            border: "1px solid blue",
            color: "blue",
            perspective: 1000,
          }}
          style={{ transformStyle: "preserve-3d" }}
          onClick={() => {
            if (onConvert) onConvert();
            router.push(link ? link : "/downloadPage");
          }}
          {...props}
        >
          Convert
        </motion.button>

        <motion.button
          className="bg-red-500 px-6 h-10 rounded-md text-white font-bold shadow-lg"
          onClick={() => router.push("/")}
          whileHover={{
            rotateX: -15,
            scale: 1.2,
            translateY: -5,
            rotateZ: -5,
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
          Back
        </motion.button>
      </div>
    </motion.div>
  );
}
