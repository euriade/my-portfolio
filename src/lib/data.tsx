// todo: importer les images des projets ici

import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaReact, FaSymfony } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const linksData = [
  {
    name: "Accueil",
    hash: "#accueil",
  },
  {
    name: "À propos",
    hash: "#a-propos",
  },
  {
    name: "Projets",
    hash: "#projets",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsMap = {
  FaSymfony: () => <FaSymfony />,
  BiLogoJavascript: () => <BiLogoJavascript />,
  FaBootstrap: () => <FaBootstrap />,
  SiNextdotjs: () => <SiNextdotjs />,
  FaReact: () => <FaReact />,
  BiLogoTypescript: () => <BiLogoTypescript />,
  SiTailwindcss: () => <SiTailwindcss />,
  default: () => <b>{"Icone inconnue"}</b>,
  // pareil pour le reste
};
export const projectsData = [
  {
    id: 1,
    title: "MSSC Briefs",
    githubLink: "https://github.com/", //todo: mettre à jour le lien du projet
    tags: ["FaSymfony", "BiLogoJavascript", "FaBootstrap"],
    article: "#", //todo: mettre le lien de l'étude de cas [blog]
    imageUrl: "", //todo: mettre la variable d'import relative à l'image projet
  },
  {
    id: 2,
    title: "Portfolio",
    githubLink: "https://github.com/", //todo: mettre à jour le lien du projet
    tags: ["SiNextdotjs", "FaReact", "BiLogoTypescript", "SiTailwindcss"],
    article: "#", //todo: mettre le lien de l'étude de cas [blog]
    imageUrl: "", //todo: mettre la variable d'import relative à l'image projet
  },
  {
    id: 3,
    title: "Projet CDA",
    githubLink: "https://github.com/", //todo: mettre à jour le lien du projet
    tags: [],
    article: "#", //todo: mettre le lien de l'étude de cas [blog]
    imageUrl: "", //todo: mettre la variable d'import relative à l'image projet
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Symfony",
  "JavaScript",
  "TypeScript",
  "PHP",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
