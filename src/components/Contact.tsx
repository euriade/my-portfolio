"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import { RiMessage2Fill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.8);
  return (
    <motion.section
      ref={ref}
      className="w-full p-16 scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="contact"
    >
      <div className="grid grid-cols-2 gap-3 max-w-[57rem] mx-auto">
        <div>
          <h2 className="flex items-center gap-2 font-bold text-2xl capitalize">
            {" "}
            <span className="text-3xl">
              <RiMessage2Fill />
            </span>{" "}
            Contact
          </h2>

          <p>
            Si vous avez la moindre question ou demande, n’hésitez pas à me
            contacter par le biais de ce <b>formulaire</b> ou via mes{" "}
            <b>réseaux sociaux</b> !<br /> Je m’engage à vous répondre{" "}
            <b>sous 72h</b>.{" "}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </p>

          <div className="flex items-center pt-6 gap-2">
            <BiSolidPhone />
            <span>06 82 07 26 65</span>
          </div>

          <div className="flex items-center py-6 gap-2">
            <MdEmail />
            <a href="mailto:ljessicalejeune@gmail.com" target="_blank">
              ljessicalejeune@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <BsGithub />
            <a href="https://github.com/euriade" target="_blank">
              github.com/euriade
            </a>
          </div>

          <div className="flex items-center py-6 gap-2">
            <BsLinkedin />
            <a href="https://www.linkedin.com/in/euriade/" target="_blank">
              linkedin.com/in/euriade/
            </a>
          </div>
        </div>

        {/* Formulaire  */}
        <div id="contact-form" className="p-12">
          <h4>Envie de travailler ensemble ?</h4>
          <form className="pt-8 relative">
            <input type="text" value="name" />
            <input type="email" />
            <input type="textarea" />
            <button type="submit">
              Envoyer <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
