"use client";
import DialougeMessage from "./DialougeMessage";
import Portrait from "./Portrait";
import React from "react";
import { useState } from "react";

const Dialouge = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    if (count >= 2) {
      localStorage.setItem("visited", true);
    }
  };
  return (
    <div
      className="absolute bottom-0 left-0 bg-black h-40 w-full"
      onClick={handleClick}
    >
      <Portrait count={count} />
      <DialougeMessage count={count} />
    </div>
  );
};

export default Dialouge;
