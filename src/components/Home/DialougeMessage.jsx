"use client";
import React from "react";
import { newGreetingMessage, existingGreetingMessage } from "@/utils/dialouges";
import { getCookie } from "cookies-next";

const DialougeMessage = ({ count }) => {
  const checkIfVisited = getCookie("hasVisited") === "true";
  return (
    <div className="flex flex-col gap-2 p-5">
      <label className="text-white font-mono pointer-events-none select-none">
        {checkIfVisited ? "Remilia" : "???"}
      </label>
      <label className="text-white font-mono pointer-events-none select-none">
        {checkIfVisited
          ? existingGreetingMessage[count]
          : newGreetingMessage[count]}
      </label>
    </div>
  );
};

export default DialougeMessage;
