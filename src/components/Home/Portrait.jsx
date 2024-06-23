import React from "react";
import Image from "next/image";
import { portraits } from "@/utils/portraits";

const Portrait = ({ count }) => {
  if (count > portraits.length) {
    count = Math.floor(Math.random() * 3);
  }
  return (
    <div className="absolute bottom-0 right-0 h-full w-44">
      <Image
        alt="remilia"
        className="select-none pointer-events-none object-cover"
        src={`/Remilia_Sprites/${portraits[count]}`}
        fill
      />
    </div>
  );
};

export default Portrait;
