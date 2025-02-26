"use client";
import { createContext } from "react";
type Types = {
  imgValue: File | null;
  setImageValue: React.Dispatch<React.SetStateAction<File | null>>;
};
export const Context = createContext<Types | null>(null);
