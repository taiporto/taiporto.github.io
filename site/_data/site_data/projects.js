const projectsImgsPath = "projects/";

const tags = {
  pessoal: {
    type: "category",
    name: "Pessoal",
    color: "indigo",
  },
  freelance: {
    type: "category",
    name: "Freelance",
    color: "red",
  },
  institucional: {
    type: "category",
    name: "Institucional",
    color: "black",
  },
  javascript: {
    type: "technology",
    name: "Javascript",
    color: "yellow",
  },
  python: {
    type: "technology",
    name: "Python",
    color: "pink",
  },
  nodejs: {
    name: "Node.js",
    color: "green",
  },
  react: {
    name: "React.js",
    color: "cyan",
  },
  twitterapi: {
    name: "TwitterAPI",
    color: "blue",
  },
};

const calculaEcoBasics = {
  img: `${projectsImgsPath}calcula-eco.png`,
  name: "CalculaECO",
  tags: [tags.pessoal, tags.javascript, tags.nodejs],
  links: [
    {
      type: "Github",
      url: "https://github.com/liaporto/calcula-eco",
      icon: "fab fa-github",
    },
    {
      type: "Site/Perfil",
      url: "http://calcula-eco.herokuapp.com/",
      icon: "fas fa-desktop",
    },
  ],
};

const bandejaoBotBasics = {
  img: `${projectsImgsPath}bandejaobot.png`,
  name: "BandejãoBot UFRJ",
  tags: [tags.pessoal, tags.python, tags.twitterapi],
  links: [
    {
      type: "Github",
      url: "https://github.com/liaporto/bandejaobot-ufrj",
      icon: "fab fa-github",
    },
    {
      type: "Site/Perfil",
      url: "https://twitter.com/bandejaobotufrj",
      icon: "fas fa-desktop",
    },
  ],
};

const dailyPokemonBasics = {
  img: `${projectsImgsPath}dailyPokemon.jpg`,
  name: "Daily Pokémon",
  tags: [tags.pessoal, tags.javascript, tags.react],
  links: [
    {
      type: "Github",
      url: "https://github.com/liaporto/daily-pokemon",
      icon: "fab fa-github",
    },
    {
      type: "Site/Perfil",
      url: "https://liaporto.github.io/daily-pokemon",
      icon: "fas fa-desktop",
    },
  ],
};

const toolkitDdjBasics = {
  img: `${projectsImgsPath}toolkit-ddj.png`,
  name: "Caixa de Ferramentas",
  tags: [tags.institucional, tags.javascript, tags.react],
  links: [
    {
      type: "Github",
      url: "https://github.com/escola-de-dados/toolkit_ddj",
      icon: "fab fa-github",
    },
    {
      type: "Site/Perfil",
      url: "http://kit.jornalismodedados.org/",
      icon: "fas fa-desktop",
    },
  ],
};

module.exports = {
  "pt-br": [
    {
      id: "calculaeco_pt",
      ...calculaEcoBasics,
      short_description:
        "Ferramenta de cálculo de C.R para a Escola de Comunicação da UFRJ.",
    },
    {
      id: "bandejaobot_pt",
      ...bandejaoBotBasics,
      short_description:
        "Bot de Twitter que publica o cardápio dos RUs da UFRJ todos os dias às 9h.",
    },
    {
      id: "dailyPokemon_pt",
      ...dailyPokemonBasics,
      short_description:
        "Descubra o Pokémon diário e o Pokémon do seu aniversário.",
    },
    {
      id: "toolkitDdj_pt",
      ...toolkitDdjBasics,
      short_description:
        "Desenvolvida durante extensão acadêmica na Open Knowledge Brasil. É uma base colaborativa de mais de 145 ferramentas para trabalhar com dados.",
    },
  ],
  "en-us": [
    {
      id: "calculaeco_en",
      ...calculaEcoBasics,
      short_description:
        "CalculaECO is a GPA calculation tool built specifically for UFRJ's Communication majors.",
    },
    {
      id: "bandejaobot_en",
      ...bandejaoBotBasics,
      short_description:
        "BandejãoBot UFRJ is a Twitter bot and it posts UFRJ's cafeteria menu daily at 9AM.",
    },
    {
      id: "dailyPokemon_en",
      ...dailyPokemonBasics,
      short_description:
        "Discover who's the daily Pokémon and who's your birthday Pokémon.",
    },
    {
      id: "toolkitDdj_en",
      ...toolkitDdjBasics,
      short_description:
        "Developed while on an academic extension project at Open Knowldge Brasil. Discover more than 145 tools for working with data.",
    },
  ],
};
