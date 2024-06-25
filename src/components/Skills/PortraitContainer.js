import React, { useState } from "react";
import Image from "next/image";
import { full_portrait } from "@/utils/portraits";
import { talk } from "@/utils/dialouges";

const PortraitContainer = ({ count, description }) => {
  const [dialouge, setDialouge] = useState(null);
  const [firstRoute, setFirstRoute] = useState(false);

  if (count >= full_portrait.length) {
    count = Math.floor(Math.random() * 3);
  }

  if (!firstRoute) {
    setDialouge(talk[0]);
    setFirstRoute(true);
  }

  setTimeout(() => {
    setDialouge(talk[count]);
  }, 15000);

  return (
    <div className="relative w-full h-lvh flex flex-col justify-center items-center">
      <Image
        className="absolute w-1/2 h-1/2 z-1 object-cover"
        src={`/Remilia_Sprites/${full_portrait[count]}`}
        width={500}
        height={500}
      />
      <div className="translate-y-36 w-10/12 h-32 flex justify-center items-center p-5 bg-opacity-75 bg-black">
        <label className="text-white font-mono">
          {description || dialouge}
        </label>
      </div>
    </div>
  );
};

export default PortraitContainer;
