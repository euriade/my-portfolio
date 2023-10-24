// todo: importer les images des projets ici

import { FaSymfony } from "react-icons/fa";

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
  default: () => <b>{"Icone inconnue"}</b>,
  // pareil pour le reste
};
export const projectsData = [
  {
    id: "01.",
    title: "MSSC Briefs",
    githubLink: "https://github.com/", //todo: mettre à jour le lien du projet
    tags: ["FaSymfony"],
    article: "#", //todo: mettre le lien de l'étude de cas [blog]
    imageUrl: "", //todo: mettre la variable d'import relative à l'image projet
  },
  {
    id: "02.",
    title: "Portfolio",
    githubLink: "https://github.com/", //todo: mettre à jour le lien du projet
    tags: [],
    article: "#", //todo: mettre le lien de l'étude de cas [blog]
    imageUrl: "", //todo: mettre la variable d'import relative à l'image projet
  },
  {
    id: "03.",
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
