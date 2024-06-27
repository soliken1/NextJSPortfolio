"use client";
import React from "react";
import { pinwheel } from "ldrs";

const PortfolioLoading = ({ classes, label }) => {
  pinwheel.register();

  return (
    <div className="flex h-screen w-screen flex-col gap-10 bg-slate-950 justify-center items-center">
      <label className={classes}>{label}</label>
      <l-pinwheel size="35" stroke="3.5" speed="0.9" color="white"></l-pinwheel>
    </div>
  );
};

export default PortfolioLoading;
