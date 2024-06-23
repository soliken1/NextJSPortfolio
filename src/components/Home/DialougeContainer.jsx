"use client";
import DialougeMessage from "./DialougeMessage";
import Portrait from "./Portrait";
import React, { useState } from "react";
import { setCookie } from "cookies-next";

const Dialouge = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    if (count >= 2) {
      setCookie("hasVisited", true);
    }
  };

  return (
    <div
      className="absolute bottom-0 left-0 bg-black h-40 w-full duration-1000"
      onClick={handleClick}
    >
      <Portrait count={count} />
      <DialougeMessage count={count} />
    </div>
  );
};

export default Dialouge;
