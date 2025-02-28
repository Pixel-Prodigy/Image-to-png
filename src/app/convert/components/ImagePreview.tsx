"use client";
import React, { useContext, useEffect } from "react";
import { Context } from "@/app/components/Context";
import { useRouter } from "next/navigation";

export default function ImagePreview({ make }: { make: boolean }) {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("Context error in convert/ImagePreview");

  const { preview } = ctx;
  const router = useRouter(); 

  useEffect(() => {
    if (!preview) {
      router.push("/");
    }
  }, [preview, router]);

  return preview ? (
    <div>
      <img
        src={preview}
        className="max-w-[400px] object-cover rounded-md"
        alt="Preview"
      />
    </div>
  ) : null;
}
