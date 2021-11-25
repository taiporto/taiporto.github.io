const experienceLinksImgPath = "other_links/"
const siacImgPath = `${experienceLinksImgPath}siac.jpg`
const naturgyImgPath = `${experienceLinksImgPath}naturgy.jpg`

module.exports = {
  "en-us": [
    {
      title: "Front-End Developer | Marketing Consultant",
      place: "EJCM",
      description: "",
      period: "Aug 2021 - Present",
      description:
        "- Project development in React.js and React Native;\n- Post design and blog articles writing;\n- Member of the Inclusion & Diversity Initiative.",
    },
    {
      title: "Customer Experience Intern",
      place: "Naturgy Brasil",
      description:
        "- Study and proposal of changes in layout and new functionalities for the Zendesk-based help center 'Minha Naturgy' targeting a better customer experience;\n- E-marketing layout development;\n- Analysis of customer satisfaction surveys.",
      period: "Jan 2020 - Jul 2021",
      media: [
        {
          link: "https://www.minhanaturgy.com.br",
          title: "Minha Naturgy",
          img: naturgyImgPath,
        },
      ],
    },
    {
      title: "Extensionist",
      place: "Federal University of Rio de Janeiro",
      description:
        "Extensionist at UFRJ's Pro-rectory of Academic Extension Programs.\nWas a part of the development team for the new UFRJ SIAc (Academic Integration Week) website, working beside the design and backend development teams.",
      period: "Jan 2020 - May 2020",
      media: [
        {
          link: "https://siac.ufrj.br/",
          title: "siac website",
          img: siacImgPath,
        },
      ],
    },
  ],
  "pt-br": [
    {
      title: "Desenvolvedora Front-End | Assessora de Marketing",
      place: "EJCM",
      description: "",
      period: "Ago 2021 - Atualmente",
      description:
        "- Desenvolvimento de projetos web em React.js e projetos mobile em React Native;\n- Elaboração de posts para redes sociais, redação de artigos para o blog da empresa e planejamento de conteúdo;\n- Membro da Iniciativa de Diversidade e Inclusão, movimento que visa promover práticas de D&I dentro da empresa;\n- Ideação e design de brindes para o aniversário da empresa.",
    },
    {
      title: "Estagiária de Experiência do cliente",
      place: "Naturgy Brasil",
      description:
        "- Design e implementação de menu de navegação para o portal Minha Naturgy;\n- Atualizações de layout e criação de funcionalidades para as centrais de ajuda internas e externas;\n- Redação de texto e mudanças de layout visando melhorias de SEO e usabilidade;\n- Análise de métricas de uso com Google Analytics e Google Data Studio;\n- Desenvolvimento, aplicação e análise de resultados de pesquisas de satisfação.",
      period: "Jan 2020 - Jul 2021",
      media: [
        {
          link: "https://www.minhanaturgy.com.br",
          title: "Minha Naturgy",
          img: naturgyImgPath,
        },
      ],
    },
    {
      title: "Bolsista de desenvolvimento web",
      place: "Pró-reitoria de extensão da UFRJ",
      description:
        "Responsável por desenvolver o novo site da Semana de Integração Acadêmica da UFRJ, a SIAc, em conjunto com as equipes de back-end e design da Pró-Reitoria. Site desenvolvido em WordPress.",
      media: [
        {
          link: "https://siac.ufrj.br/",
          title: "Site da SIAc",
          img: siacImgPath,
        },
      ],
      period: "Jan 2020 - Mai 2020",
    },
  ],
}
