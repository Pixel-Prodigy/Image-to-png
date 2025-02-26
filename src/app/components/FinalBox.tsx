import React from "react";
import IntroBox from "./IntroBox";
import ContextProvider from "./ContextProvider";

export default function FinalBox() {
    
  return (
    <ContextProvider>
      <IntroBox />
    </ContextProvider>
  );
}
