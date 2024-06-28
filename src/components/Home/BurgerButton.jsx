"use client";
import Link from "next/link";
import React, { useState } from "react";

const BurgerButton = () => {
  const [isPressed, setPressed] = useState(false);

  const handleSelect = () => {
    setPressed(!isPressed);
  };

  return (
    <div className="absolute w-11/12 md:w-2/6 h-full top-0 right-0 flex flex-col justify-center pe-5 items-end">
      <div
        className="flex flex-col gap-1
        hover:cursor-pointer duration-500"
        onClick={handleSelect}
      >
        <div className="border-2 rounded-full border-white border-solid w-6"></div>
        <div className="border-2 rounded-full border-white border-solid w-6"></div>
        <div className="border-2 rounded-full border-white border-solid w-6"></div>
      </div>
      <div
        className={`absolute flex flex-row gap-6 md:gap-10 top-50 left-0 transform transition-transform duration-1000 ease-in-out ${
          isPressed
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <Link href="/">
          <label className="text-white text-sm font-mono hover:cursor-pointer">
            Home
          </label>
        </Link>
        <Link href="/skills">
          <label className="text-white text-sm font-mono hover:cursor-pointer">
            Skills
          </label>
        </Link>
        <Link href="/projects">
          <label className="text-white text-sm font-mono hover:cursor-pointer">
            Projects
          </label>
        </Link>
        <Link href="/participations">
          <label className="text-white text-sm font-mono hover:cursor-pointer">
            Participations
          </label>
        </Link>
        <Link href="/links">
          <label className="text-white text-sm font-mono hover:cursor-pointer">
            Links
          </label>
        </Link>
      </div>
    </div>
  );
};

export default BurgerButton;
