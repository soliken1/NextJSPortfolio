import React from "react";
import Project from "./Project";
import ProjectDescription from "./ProjectDescription";

const ProjectContainer = () => {
  return (
    <div className="w-full h-full mt-16 md:mt-0 md:h-2/3 flex flex-col md:flex-row">
      <div className="h-full w-full flex flex-col gap-2 overflow-auto">
        <Project />
        <Project />
        <Project />
      </div>
      <ProjectDescription />
    </div>
  );
};

export default ProjectContainer;
