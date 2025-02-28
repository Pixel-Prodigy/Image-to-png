"use client";
import { createContext } from "react";
type Types = {
  imgValue: File | null;
  setImageValue: React.Dispatch<React.SetStateAction<File | null>>;
  preview: string | undefined;
  setPreview: React.Dispatch<React.SetStateAction<string | undefined>>;
  convertedUrl: Blob | null;
  setConvertedUrl: React.Dispatch<React.SetStateAction<Blob | null>>;
  copyCode: string | null
  setCopyCode:  React.Dispatch<React.SetStateAction<string | null>>;
};
export const Context = createContext<Types | null>(null);
