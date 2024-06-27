import React from "react";
import Image from "next/image";
import { portraits_x2 } from "@/utils/portraits";

const Portrait = ({ count }) => {
  if (count >= portraits_x2.length) {
    count = Math.floor(Math.random() * 3);
  }
  return (
    <div className="absolute bottom-0 right-0 h-full w-44 md:w-96">
      <Image
        alt="remilia"
        fill
        className="select-none pointer-events-none object-cover"
        src={`/Remilia_Sprites/${portraits_x2[count]}`}
      />
    </div>
  );
};

export default Portrait;
