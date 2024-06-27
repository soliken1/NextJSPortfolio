"use client";
import React, { useState } from "react";
import ProgressLine from "@/components/Skills/ProgressLine";
import Description from "./Description";
import PortraitContainer from "./PortraitContainer";

const Stats = () => {
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [handleCount, setHandleCount] = useState(0);

  const handleMouseEnter = (label) => {
    setHoveredLabel(label);
    setHandleCount((prevCount) => prevCount + 1);
  };

  const handleMouseLeave = () => {
    setHoveredLabel(null);
  };

  const progressData = [
    {
      label: "Next.js Framework",
      image: "/Logo/Next.png",
      expLabel: "1 Month",
      visualParts: [{ percentage: "5%", color: "tan" }],
      description: "In comparison... This is a small fly's lifespan to me...",
      color: "bg-rose-600",
    },
    {
      label: "React.js Library",
      image: "/Logo/React.png",
      expLabel: "7 Months",
      visualParts: [{ percentage: "35%", color: "tan" }],
      description: "Impressive.",
      color: "bg-rose-700",
    },
    {
      label: "Kotlin Android Development",
      image: "/Logo/Android.png",
      expLabel: "5 Months",
      visualParts: [{ percentage: "25%", color: "tan" }],
      description: "...",
      color: "bg-rose-800",
    },
    {
      label: "Flutter",
      image: "/Logo/Flutter.png",
      expLabel: "1 Month",
      visualParts: [{ percentage: "5%", color: "tan" }],
      description: "Only?",
      color: "bg-rose-900",
    },
    {
      label: "ASP.Net MVC Framework",
      image: "/Logo/ASP.png",
      expLabel: "12 Months",
      visualParts: [{ percentage: "60%", color: "tan" }],
      description: "My my... This one is quite tedious...",
      color: "bg-rose-950",
    },
  ];

  const hoveredDescription =
    progressData.find((data) => data.label === hoveredLabel)?.description || "";
  const hoveredColor =
    progressData.find((data) => data.label === hoveredLabel)?.color ||
    "bg-gray-950";

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-full flex justify-center flex-col gap-5">
        <div className="flex justify-center items-center mb-0 md:mb-10">
          <label className="text-white font-mono text-2xl">
            Development Skills
          </label>
        </div>
        {progressData.map((data, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(data.label)}
            onMouseLeave={handleMouseLeave}
          >
            <ProgressLine
              label={data.label}
              image={data.image}
              expLabel={data.expLabel}
              visualParts={data.visualParts}
              color={data.color}
              isHovered={hoveredLabel === data.label}
            />
          </div>
        ))}
      </div>
      <div
        className={`w-full md:w-1/2 flex justify-center flex-col gap-5 transition-colors duration-500 ${hoveredColor}`}
      >
        <PortraitContainer
          description={hoveredDescription}
          count={handleCount}
        />
        <Description isHovered={hoveredLabel !== null} />
      </div>
    </div>
  );
};

export default Stats;
