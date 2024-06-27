import React from "react";
import Project from "./Project";
import ProjectDescription from "./ProjectDescription";

const ProjectContainer = () => {
  const projects = [
    {
      label: "NextJS Portfolio",
      description: "",
    },
    {
      label: "NextJS Listening Party",
      description: "",
    },
    {
      label: "PSITS System",
      description: "",
    },
    {
      label: "Trabahub",
      description: "",
    },
    {
      label: "Listening Party Flutter",
      description: "",
    },
    {
      label: "Woodables Mobile",
      description: "",
    },
    {
      label: "Listening Party React + Firebase",
      description: "",
    },
    {
      label: "Small Sidescroller Game",
      description: "",
    },
    {
      label: "Findy",
      description: "",
    },
  ];
  return (
    <div className="w-full h-full mt-16 md:mt-0 md:h-2/3 flex items-center flex-col md:flex-row">
      <div className="h-lvh md:h-svh mt-16 mb-16 p-20 w-full flex flex-col gap-2 overflow-auto">
        {projects.map((project, index) => (
          <div className="" key={index}>
            <Project label={project.label} />
          </div>
        ))}
      </div>
      <ProjectDescription />
    </div>
  );
};

export default ProjectContainer;
