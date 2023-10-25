"use client";

import { projectsData } from "@/lib/data";
import React from "react";
import { BsWrenchAdjustable } from "react-icons/bs";
import Project from "./Project";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projets", 0.8);

  return (
    <motion.section
      ref={ref}
      className="w-full p-16 scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projets"
    >
      <div className="max-w-[57rem] mx-auto">
        <h2 className="flex items-center gap-2 font-bold text-2xl capitalize">
          {" "}
          <span className="text-3xl">
            <BsWrenchAdjustable />
          </span>{" "}
          Projets
        </h2>
        <div className="grid grid-cols-3 gap-5 my-12">
          {projectsData.map((project) => (
            <React.Fragment key={project.id}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
