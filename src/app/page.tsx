"use client";
import Heading from "./components/Heading";
import IntroBox from "./components/IntroBox";
export default function Home() {
  return (
    <div className="flex relative flex-col items-center justify-start overflow-x-hidden h-fit min-h-screen">
      <Heading text="Image" xClass="text-[12rem] " textClass="text-8xl" />
      <div className="grid pb-10 place-items-center h-[400px] max-w-[800px] w-full">
        <IntroBox />
      </div>
    </div>
  );
}
