const experience = require("./site_data/experience")
education = require("./site_data/education")
projects = require("./site_data/projects")
skills = require("./site_data/skills")
interests = require("./site_data/interests")

const title = "Lia Porto"
const imgPath = "../public/img/";
const baseUrl = "https://www.liaporto.github.io";

module.exports = {
  buildTime: new Date(),
  baseUrl: baseUrl,
  title: title,
  year: new Date().getFullYear(),
  style_src: "../public/css/style.css",
  img_path: `${imgPath}`,
  metaImage: `${imgPath}metaimg.png`,
  js_src: "/js/script.js",
  skills: [...skills],

  "en-us": {
    lang: "en-us",
    metaTitle: `${title}`,
    metaDescription: `Personal website, portfolio and resume`,
    inSiteDescription: "Front-end developer and Communications student at UFRJ.",
    backtoTop: "Back to top",
    topics: [
      {
        name: "About me",
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
      {
        name: "Projects",
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
    inSiteDescription: "Desenvolvedora front-end e estudante de Comunicação Social na UFRJ.",
    backtoTop: "Voltar ao topo",
    topics: [
      {
        name: "Sobre",
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
      {
        name: "Projetos",
      },
    ],
    experience: [...experience["pt-br"]],
    education: [...education["pt-br"]],
    interests: [...interests["pt-br"]],
    projects: [...projects["pt-br"]],
  },
}
