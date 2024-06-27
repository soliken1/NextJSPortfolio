import React from "react";

const Description = ({ isHovered }) => {
  return (
    <div
      className={`flex justify-center item-center transform transition-transform duration-300 ease-in-out ${
        isHovered ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
    ></div>
  );
};

export default Description;
