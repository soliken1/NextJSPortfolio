import React from "react";

const Project = ({ label }) => {
  return (
    <div className="w-full h-48">
      <label className="text-white font-mono text-md">{label}</label>
    </div>
  );
};

export default Project;
