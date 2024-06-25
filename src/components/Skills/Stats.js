"use client";
import React, { useState } from "react";
import ProgressLine from "@/components/Skills/ProgressLine";
import Description from "./Description";

const Stats = () => {
  const [hoveredLabel, setHoveredLabel] = useState(null);

  const handleMouseEnter = (label) => {
    setHoveredLabel(label);
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
      description: "Experience with the Next.js framework.",
    },
    {
      label: "React.js Library",
      image: "/Logo/React.png",
      expLabel: "7 Months",
      visualParts: [{ percentage: "35%", color: "tan" }],
      description: "Proficient in building React applications.",
    },
    {
      label: "Kotlin Android Development",
      image: "/Logo/Android.png",
      expLabel: "5 Months",
      visualParts: [{ percentage: "25%", color: "tan" }],
      description: "Developed Android apps using Kotlin.",
    },
    {
      label: "Flutter",
      image: "/Logo/Flutter.png",
      expLabel: "1 Month",
      visualParts: [{ percentage: "5%", color: "tan" }],
      description: "Basic knowledge of Flutter for cross-platform development.",
    },
    {
      label: "ASP.Net MVC Framework",
      image: "/Logo/ASP.png",
      expLabel: "12 Months",
      visualParts: [{ percentage: "60%", color: "tan" }],
      description: "Extensive experience with ASP.Net MVC framework.",
    },
  ];

  const hoveredDescription =
    progressData.find((data) => data.label === hoveredLabel)?.description || "";

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row">
      <div className="w-full h-4/5 md:w-1/2 md:h-full flex justify-center p-20 flex-col gap-5">
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
            />
          </div>
        ))}
      </div>
      <div className="w-full h-4/5 md:w-1/2 md:h-full flex justify-center flex-col gap-5">
        <Description
          isHovered={hoveredLabel !== null}
          description={hoveredDescription}
        />
      </div>
    </div>
  );
};

export default Stats;
