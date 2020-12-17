const experience = require("./site_data/experience")
education = require("./site_data/education")
projects = require("./site_data/projects")
skills = require("./site_data/skills")
interests = require("./site_data/interests")

const title = "Lia Porto"

module.exports = {
  buildTime: new Date(),
  baseUrl: "https://www.liaporto.github.io",
  title: title,
  year: new Date().getFullYear(),
  style_src: "../public/css/style.css",
  img_path: "../public/img/",
  js_src: "/js/script.js",
  skills: [...skills],

  "en-us": {
    lang: "en-us",
    metaTitle: title,
    metaDescription: `${title} - Front-end developer | Personal website, portfolio and resume`,
    inSiteDescription: "Front-end developer and UX student.",
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
    metaTitle: title,
    metaDescription: `${title} | Site pessoal, currículo e portfólio.`,
    inSiteDescription: "Desenvolvedora front-end e estudante de UX.",
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
