import React from "react";

const ActionButton = () => {
  return (
    <div className="flex gap-4 flex-row">
      <button type="button" className="ps-5 pe-5 pt-1 pb-1">
        <label className="text-white hidden md:block text-xs md:text-lg font-mono hover:cursor-pointer select-none pointer-events-none">
          Hide
        </label>
      </button>
      <button type="button" className="ps-5 pe-5 pt-1 pb-1">
        <label className="text-white hidden md:block text-xs md:text-lg font-mono hover:cursor-pointer select-none pointer-events-none">
          Skip
        </label>
      </button>
    </div>
  );
};

export default ActionButton;
