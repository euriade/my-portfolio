"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import { RiMessage2Fill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "../../actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.8);

  return (
    <motion.section
      ref={ref}
      className="w-full p-16 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
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

          <p className="pt-3">
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
            <a href="tel:0682072665" target="_blank">
              06 82 07 26 65
            </a>
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
        <div className="p-5 w-[min(100%, 38rem)] bg-gray-100 rounded-lg">
          <h4 className="font-bold">Envie de travailler ensemble ?</h4>
          <form
            className="pt-5 flex flex-col"
            action={async (formData) => {
              await sendEmail(formData);
            }}
          >
            <input
              className="h-14 rounded-lg borderBlack p-4"
              name="senderName"
              type="text"
              required
              maxLength={150}
              placeholder="Votre nom"
            />
            <input
              className="h-14 mt-3 rounded-lg borderBlack p-4"
              name="senderEmail"
              type="email"
              required
              maxLength={150}
              placeholder="Votre e-mail"
            />
            <textarea
              name="message"
              className="my-3 rounded-lg borderBlack p-4"
              required
              maxLength={5000}
              rows={7}
              placeholder="Votre message"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
            >
              Envoyer{" "}
              <FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
              {/* #todo: https://youtu.be/sUKptmUVIBM?t=17347 */}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
