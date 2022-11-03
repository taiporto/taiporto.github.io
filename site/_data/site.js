const experience = require("./site_data/experience");
education = require("./site_data/education");
projects = require("./site_data/projects");
skills = require("./site_data/skills");
interests = require("./site_data/interests");

const title = "Tai Porto";
const imgPath = "../public/img/";
const baseUrl = "https://www.taiporto.github.io";

module.exports = {
  buildTime: new Date(),
  baseUrl: baseUrl,
  title: title,
  year: new Date().getFullYear(),
  style_src: "../public/css/style.css",
  img_path: `${imgPath}`,
  metaImage: `/public/img/metaimg.png`,
  favicon: `${imgPath}favicon.ico`,
  js_src: "/js/script.js",
  skills: [...skills],

  "en-us": {
    lang: "en-us",
    metaTitle: `${title}`,
    metaDescription: `Personal website, portfolio and resume`,
    inSiteDescription:
      "Front-end developer and Information Systems student at UFF.",
    backtoTop: "Back to top",
    topics: [
      {
        name: "About me",
      },
      {
        name: "Projects",
      },
      {
        name: "Experience",
      },
      {
        name: "Education",
      },
      {
        name: "Skills",
      },
    ],
    experience: [...experience["en-us"]],
    education: [...education["en-us"]],
    interests: [...interests["en-us"]],
    projects: [...projects["en-us"]],
  },

  "pt-br": {
    lang: "pt-br",
    metaTitle: `${title}`,
    metaDescription: `Site pessoal, currículo e portfólio.`,
    inSiteDescription:
      "Desenvolvedor front-end e estudante de Sistemas de Informação na UFF.",
    backtoTop: "Voltar ao topo",
    topics: [
      {
        name: "Sobre",
      },
      {
        name: "Projetos",
      },
      {
        name: "Experiência",
      },
      {
        name: "Estudo",
      },
      {
        name: "Stack",
      },
    ],
    experience: [...experience["pt-br"]],
    education: [...education["pt-br"]],
    interests: [...interests["pt-br"]],
    projects: [...projects["pt-br"]],
  },
};
