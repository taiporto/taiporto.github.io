const projectsImgsPath = "projects/";
const calculaecoImgPath = `${projectsImgsPath}calcula-eco.png`;
const bandejaobotImgPath = `${projectsImgsPath}bandejaobot.png`;
const calculaecoLinks = {
  website:'http://calcula-eco.herokuapp.com/', 
  github: 'https://github.com/liaporto/calcula-eco'
}
const bandejaobotLinks = {
  website:'https://twitter.com/bandejaobotufrj', 
  github: 'https://github.com/liaporto/bandejaobot-ufrj'
}

module.exports = {
  "en-us": [
    {
      id: "calculaeco_en",
      img: calculaecoImgPath,
      name: "CalculaECO",
      links: calculaecoLinks,
      short_description:
        "CalculaECO is a GPA calculation tool build specifically for UFRJ's Communication majors.",
    },
    {
      id: "bandejaobot_en",
      img: bandejaobotImgPath,
      name: "BandejãoBot UFRJ",
      links: bandejaobotLinks,
      short_description:
        "BandejãoBot UFRJ is a Twitter bot that posts the menu from the UFRJ's cafeteria at 9AM everyday.",
    },
  ],
  "pt-br": [
    {
      id: "calculaeco_pt",
      img: calculaecoImgPath,
      name: "CalculaECO",
      links: calculaecoLinks,
      short_description:
        "Ferramenta de cálculo de C.R para a Escola de Comunicação da UFRJ.",
    },
    {
      id: "bandejaobot_pt",
      img: bandejaobotImgPath,
      name: "BandejãoBot UFRJ",
      links: bandejaobotLinks,
      short_description:
        "Bot de Twitter que publica o cardápio dos RUs da UFRJ todos os dias às 9h.",
    },
  ],
}
