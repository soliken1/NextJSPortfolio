import React from "react";
import Image from "next/image";
import { portraits } from "@/utils/portraits";

const Portrait = ({ count }) => {
  if (count >= portraits.length) {
    count = 0;
  }
  return (
    <div className="absolute bottom-0 right-0 h-full w-44">
      <Image
        className="select-none pointer-events-none object-cover"
        src={`/Remilia_Sprites/${portraits[count]}`}
        fill
      />
    </div>
  );
};

export default Portrait;
