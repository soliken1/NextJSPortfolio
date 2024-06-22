import React from "react";

const BurgerButton = () => {
  return (
    <div className="absolute w-16 h-full top-0 right-0 flex flex-col justify-center items-center gap-1 hover:cursor-pointer">
      <div className="border-2 rounded-full border-white border-solid w-6"></div>
      <div className="border-2 rounded-full border-white border-solid w-6"></div>
      <div className="border-2 rounded-full border-white border-solid w-6"></div>
    </div>
  );
};

export default BurgerButton;
