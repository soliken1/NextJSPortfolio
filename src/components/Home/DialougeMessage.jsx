"use client";
import React from "react";
import { newGreetingMessage, existingGreetingMessage } from "@/utils/dialouges";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const DialougeMessage = ({ count }) => {
  const [hasVisited, setHasVisited] = useState(false);
  useEffect(() => {
    setHasVisited(getCookie("hasVisited") === "true");
  }, []);
  return (
    <div className="flex flex-col gap-2 p-5 duration-1000">
      <label className="text-white font-mono pointer-events-none select-none">
        {hasVisited ? "Remilia" : "???"}
      </label>
      <div className="dialouge">
        <label className="text-white font-mono pointer-events-none select-none">
          {hasVisited
            ? existingGreetingMessage[count]
            : newGreetingMessage[count]}
        </label>
      </div>
    </div>
  );
};

export default DialougeMessage;
