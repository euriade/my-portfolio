"use client";

import { projectsData } from "@/lib/data";
import React from "react";
import { BsWrenchAdjustable } from "react-icons/bs";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="w-full p-16">
      <div className="max-w-[57rem] mx-auto">
        <h2 className="flex items-center gap-2 font-bold text-2xl capitalize">
          {" "}
          <span className="text-3xl">
            <BsWrenchAdjustable />
          </span>{" "}
          Projets
        </h2>
        <div className="grid grid-cols-3 gap-5 my-12">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
            <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
