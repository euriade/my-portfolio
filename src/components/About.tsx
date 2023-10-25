"use client";

import React from "react";
import { GiOpenBook } from "react-icons/gi";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("À propos");

  return (
    <motion.section
      ref={ref}
      className="bg-gray-100 w-full px-16 py-[7rem] scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="a-propos"
    >
      <div className="max-w-[57rem] mx-auto">
        <h2 className="flex items-center gap-2 font-bold text-2xl capitalize">
          {" "}
          <span className="text-3xl">
            <GiOpenBook />
          </span>{" "}
          À propos
        </h2>
        <p className="py-8">
          Bonjour à vous, cher internaute et bienvenue sur ce lopin de toile !{" "}
          <span role="img" aria-label="twinkle">
            ✨
          </span>
          <br />
          <br />
          Je me prénomme <strong>Jessica</strong>, j’ai <strong>26 ans</strong>{" "}
          et je suis en alternance pour devenir{" "}
          <strong>Concepteur Développeur d’Applications</strong>. Un nom
          alambiqué, me direz-vous ! Voyez ça comme un{" "}
          <strong>développeur</strong> un peu plus soucieux des{" "}
          <strong>solutions utilisées</strong>, de la <strong>sécurité</strong>{" "}
          et de tout ce qui répondra aux <strong>besoins</strong> du product
          owner.
          <br />
          <br />
          C’est dans cette optique que j’ai créé ce <strong>portfolio</strong> :
          partager mes <strong>projets</strong>, écrire quelques{" "}
          <strong>articles</strong> et <strong>tutoriels</strong> pour votre{" "}
          <strong>veille technologique</strong> ainsi qu’une partie de ce que je
          suis, au travail et en-dehors.
          <br />
          <br />
          Installez-vous confortablement, buvez un bon thé et passons à la suite
          !{" "}
          <span role="img" aria-label="tea">
            🍵
          </span>
        </p>
      </div>
    </motion.section>
  );
};

export default About;
