const projectsImgsPath = "projects/";

const imgPaths = {
  calculaeco: `${projectsImgsPath}calcula-eco.png`,
  bandejaoBot: `${projectsImgsPath}bandejaobot.png`,
  dailyPokemon: `${projectsImgsPath}dailyPokemon.jpg`
}

const links = {
  calculaecoLinks: [
    {
      type: "Github",
      url: 'https://github.com/liaporto/calcula-eco',
      icon: "fab fa-github"
    },
    {
      type: "Site/Perfil",
      url:'http://calcula-eco.herokuapp.com/',
      icon: "fas fa-desktop"
    },  
  ],
  bandejaobotLinks: [
    {
      type: "Github",
      url: 'https://github.com/liaporto/bandejaobot-ufrj',
      icon: "fab fa-github"
    },
    {
      type: "Site/Perfil",
      url:'https://twitter.com/bandejaobotufrj',
      icon: "fas fa-desktop"
    },
  ],
  dailyPokemonLinks: [
    {
      type: "Github",
      url: 'https://github.com/liaporto/daily-pokemon',
      icon: "fab fa-github"
    },
    {
      type: "Site/Perfil",
      url:'https://liaporto.github.io/daily-pokemon',
      icon: "fas fa-desktop"
    },
  ]
}

module.exports = {
  "en-us": [
    {
      id: "calculaeco_en",
      img: imgPaths.calculaeco,
      name: "CalculaECO",
      links: links.calculaecoLinks,
      short_description:
        "CalculaECO is a GPA calculation tool built specifically for UFRJ's Communication majors.",
    },
    {
      id: "bandejaobot_en",
      img: imgPaths.bandejaoBot,
      name: "BandejãoBot UFRJ",
      links: links.bandejaobotLinks,
      short_description:
        "BandejãoBot UFRJ is a Twitter bot and it posts UFRJ's cafeteria menu daily at 9AM.",
    },
    {
      id: "dailyPokemon_en",
      img: imgPaths.dailyPokemon,
      name: "Daily Pokémon",
      links: links.dailyPokemonLinks,
      short_description:
        "Discover who's the daily Pokémon and who's your birthday Pokémon.",
    },
  ],
  "pt-br": [
    {
      id: "calculaeco_pt",
      img: imgPaths.calculaeco,
      name: "CalculaECO",
      links: links.calculaecoLinks,
      short_description:
        "Ferramenta de cálculo de C.R para a Escola de Comunicação da UFRJ.",
    },
    {
      id: "bandejaobot_pt",
      img: imgPaths.bandejaoBot,
      name: "BandejãoBot UFRJ",
      links: links.bandejaobotLinks,
      short_description:
        "Bot de Twitter que publica o cardápio dos RUs da UFRJ todos os dias às 9h.",
    },
    {
      id: "dailyPokemon_en",
      img: imgPaths.dailyPokemon,
      name: "Daily Pokémon",
      links: links.dailyPokemonLinks,
      short_description:
        "Descubra o Pokémon diário e o Pokémon do seu aniversário.",
    },
  ],
}
