import React from "react";
import BurgerButton from "./BurgerButton";
import ActionButton from "./ActionButton";
const TopMenuContainer = () => {
  return (
    <div className="absolute z-10 flex flex-row items-center top-0 left-0 h-14 w-full ps-5 pe-5">
      <ActionButton />
      <BurgerButton />
    </div>
  );
};

export default TopMenuContainer;
