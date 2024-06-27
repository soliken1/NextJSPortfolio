import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { full_portrait } from "@/utils/portraits";
import { talk } from "@/utils/dialouges";

const PortraitContainer = ({ count, description }) => {
  const [dialouge, setDialouge] = useState(null);
  const intervalRef = useRef(null);

  if (count >= full_portrait.length) {
    count = Math.floor(Math.random() * 3);
  }

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setDialouge(talk[count]);
    }, 7000);

    return () => clearInterval(intervalRef.current);
  }, [count]);

  return (
    <div className="relative w-full  h-lvh flex flex-col justify-center items-center">
      <Image
        alt="remilia"
        className="absolute translate-y-5 bottom-0 w-1/2 h-1/2 z-1 object-cover"
        src={`/Remilia_Sprites/${full_portrait[count]}`}
        width={500}
        height={500}
      />
      <div className="absolute bottom-0 translate-y-5 w-10/12 h-32 flex justify-center items-center p-5 bg-opacity-75 bg-black">
        <label className="text-white font-mono">
          {description || dialouge || "Hello..."}
        </label>
      </div>
    </div>
  );
};

export default PortraitContainer;
