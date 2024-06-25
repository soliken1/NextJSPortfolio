"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ProgressLine = ({
  label,
  expLabel,
  image,
  backgroundColor,
  visualParts,
}) => {
  const [widths, setWidths] = useState(visualParts.map(() => 0));

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(visualParts.map((item) => item.percentage));
    });
  }, [visualParts]);

  return (
    <div className="flex flex-row h-24 items-center gap-5">
      <Image
        className="bg-white p-1 w-20 h-20 rounded-full object-cover"
        src={image}
        width={80}
        height={80}
      />
      <div className="flex flex-col w-full">
        <div className="font-mono text-white">{label}</div>
        <div className="font-mono text-white">{expLabel}</div>
        <div
          className="progressVisualFull"
          style={{
            backgroundColor,
          }}
        >
          {visualParts.map((item, index) => (
            <div
              key={index}
              style={{
                width: widths[index],
                backgroundColor: item.color,
              }}
              className="progressVisualPart"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressLine;
