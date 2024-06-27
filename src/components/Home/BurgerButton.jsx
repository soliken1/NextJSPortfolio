"use client";
import Link from "next/link";
import React, { useState } from "react";

const BurgerButton = () => {
  const [isPressed, setPressed] = useState(false);

  const handleSelect = () => {
    setPressed(!isPressed);
  };

  return (
    <div className="absolute w-32 h-full top-0 right-0 flex flex-col justify-center pe-5 items-end">
      <div
        className="flex flex-col gap-1 hover:cursor-pointer"
        onClick={handleSelect}
      >
        <div className="border-2 rounded-full border-white border-solid w-6"></div>
        <div className="border-2 rounded-full border-white border-solid w-6"></div>
        <div className="border-2 rounded-full border-white border-solid w-6"></div>
      </div>
      <div
        className={`absolute top-50 left-0 transform transition-transform duration-500 ease-in-out ${
          isPressed ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Link href="/">
          <label className="text-white font-mono hover:cursor-pointer">
            Home
          </label>
        </Link>
      </div>
    </div>
  );
};

export default BurgerButton;
