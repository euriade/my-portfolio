"use client";

import React from "react";
import { useState } from "react";
import { projectsData, skillsMap } from "@/lib/data";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  id,
  title,
  githubLink,
  tags,
  article,
}: ProjectProps) => {
  return (
    <div className="p-5 bg-gray-100 shadow-sm rounded-lg">
      <p className="text-4xl font-bold text-center p-8">{id}</p>
      <h4 className="text-2xl">{title}</h4>
      <a
        className="flex items-center py-6 gap-2 underline font-bold"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
        Voir le code source
      </a>
      <Link
        href={article}
        className="group bg-[#5DDD9C] text-white justify-center py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
      >
        Lire étude de cas
      </Link>
      <p className="flex py-6 text-2xl gap-2">
        {tags
          .map((t) => skillsMap[t] ?? skillsMap.default)
          .map((Icon) => (
            <Icon />
          ))}
      </p>
    </div>
  );
};

export default Project;
