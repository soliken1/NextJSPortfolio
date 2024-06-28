import React from "react";
import Image from "next/image";

const Project = ({ label, role, description, stars }) => {
  return (
    <div className="w-full h-48 flex flex-col gap-1">
      <label className="text-white font-mono text-md">{label}</label>
      <label className="text-white font-mono text-xs">{role}</label>
      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, index) => (
          <Image
            key={index}
            src="/star.png"
            alt="Star"
            width={100}
            height={100}
            className="w-8 h-8"
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
