"use client";

import Image from "next/image";
import React from "react";
import IntroImg from "../../public/carr-otis.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Introduction = () => {
  return (
    <section className="grid grid-cols-3 items-center mb-28">
      <motion.div
        className="col-span-2 px-5 mx-auto"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h1 className="font-bold text-4xl">Jessica Lejeune | euriade.</h1>
        <h2 className="font-bold text-2xl">Développeuse fullstack junior</h2>
        <p className="py-3">
          Je privilégie une stack{" "}
          <span className="font-bold underline">JavaScript</span>:{" "}
          <span className="font-bold">React</span>,{" "}
          <span className="font-bold">Next</span> et{" "}
          <span className="font-bold">Node</span>.
        </p>

        <div className="flex flex-col sm:flex-row itemps-center gap-2 text-lg pr-2 pt-5">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition shadow-xl"
          >
            Me contacter{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer shadow-xl"
            href="/CV.pdf"
            download
          >
            Télécharger mon CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-5 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer shadow-xl"
            href="https://www.linkedin.com/in/euriade/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-5 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer shadow-xl"
            href="https://github.com/euriade"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>

      <div className="col-span-1 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={IntroImg}
            alt="Jessica portrait"
            className="rounded-full object-cover border-[0.5rem] border-white shadow-xl"
          />
        </motion.div>

        <motion.span
          className="absolute bottom-2 left-4 text-5xl"
          role="img"
          aria-label="apple-juice"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          🧃
        </motion.span>
      </div>
    </section>
  );
};

export default Introduction;
