"use client";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Context } from "../../components/Context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Buttons from "../components/Buttons";

export default function Page() {
  const ctx = useContext(Context);
  const router = useRouter();
  const [uploaded, setUploaded] = useState(false);
  if (!ctx) throw new Error("Context problem in convert/page");

  const {
    setImageValue,
    setPreview,
    imgValue,
    preview,
    setConvertedUrl,
    convertedUrl,
  } = ctx;
  useEffect(() => {
    if (!imgValue) return router.push("/");
  }, [imgValue]);

  const uploadImage = async () => {
    if (!imgValue) return router.push("/");

    const formData = new FormData();

    formData.append("file", imgValue);

    const response = await fetch("http://localhost:5000/convert/imageToPng", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.error("Failed to convert image");
      return;
    }

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    setPreview(imageUrl);
    setConvertedUrl(blob);
    setUploaded(true);
  };

  return (
   <Buttons onConvert={uploadImage} heading="Convert to Png" />
  );
}
