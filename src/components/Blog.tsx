"use client";

import React from "react";
import { TbWriting } from "react-icons/tb";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const Blog = () => {
  const { ref } = useSectionInView("Blog");

  return (
    <motion.section
      ref={ref}
      className="bg-gray-100 w-full px-16 py-[7rem] scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="blog"
    >
      <div className="max-w-[57rem] mx-auto">
        <h2 className="flex items-center gap-2 font-bold text-2xl capitalize">
          {" "}
          <span className="text-3xl">
            <TbWriting />
          </span>{" "}
          Blog
        </h2>
        <p className="py-8">
          En cours !
          <span role="img" aria-label="twinkle">
            ✨
          </span>
        </p>
      </div>
    </motion.section>
  );
};

export default Blog;
