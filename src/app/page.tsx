"use client";
import IntroBox from "./components/IntroBox";
import Heading from "./components/Heading";
import FinalBox from "./components/FinalBox";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start">
      <Heading />
      <div className="grid grid-cols-1 mt-20 h-[400px] place-items-center max-w-[800px] w-full">
        <FinalBox />
      </div>
    </div>
  );
}
