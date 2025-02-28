"use client";
import React, { useState } from "react";
import { Context } from "./Context";
export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imgValue, setImageValue] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [convertedUrl, setConvertedUrl] = useState<Blob | null>(null);
  const [copyCode, setCopyCode] = useState<string | null>(null);
  return (
    <Context.Provider
      value={{
        imgValue,
        setImageValue,
        setPreview,
        preview,
        setConvertedUrl,
        convertedUrl,
        copyCode,
        setCopyCode,
      }}
    >
      {children}
    </Context.Provider>
  );
}
