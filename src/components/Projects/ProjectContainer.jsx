import React from "react";
import Project from "./Project";

const ProjectContainer = () => {
  const projects = [
    {
      label: "NextJS Portfolio",
      role: "Solo / Frontend Developer",
      description: "",
      stars: 2,
    },
    {
      label: "NextJS Listening Party",
      role: "Solo / Fullstack Developer",
      description: "",
      stars: 4,
    },
    {
      label: "PSITS System",
      role: "SYSARCH Special Project Team / Project Manager",
      description: "",
      stars: 5,
    },
    {
      label: "Trabahub",
      role: "Alvin John & Ken James / Fullstack Developer",
      description: "",
      stars: 5,
    },
    {
      label: "Listening Party Flutter",
      role: "Solo / Fullstack Developer",
      description: "",
      stars: 4,
    },
    {
      label: "Woodables Mobile",
      role: "Woodables Team / Backend Developer",
      description: "",
      stars: 3,
    },
    {
      label: "Listening Party React + Firebase",
      role: "Solo / Fullstack Developer",
      description: "",
      stars: 3,
    },
    {
      label: "Small Sidescroller Game",
      role: "Solo / Frontend Developer",
      description: "",
      stars: 2,
    },
    {
      label: "Findy",
      role: "Solo / Frontend Developer",
      description: "",
      stars: 2,
    },
  ];
  return (
    <div className="h-screen w-full p-20 flex items-end flex-col gap-5 overflow-auto">
      {projects.map((project, index) => (
        <div
          className="w-full md:w-1/3 h-1/6 md:h-28 p-5 rounded-2xl bg-black"
          key={index}
        >
          <Project
            label={project.label}
            role={project.role}
            description={project.description}
            stars={project.stars}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectContainer;
