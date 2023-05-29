const experienceLinksImgPath = "other_links/";
const siacImgPath = `${experienceLinksImgPath}siac.jpg`;
const naturgyImgPath = `${experienceLinksImgPath}naturgy.jpg`;
const ejcmImgPath = `${experienceLinksImgPath}ejcm.jpg`;

module.exports = {
  "en-us": [
    {
      title: "Junior Software Developer",
      place: "Pipefy",
      description: "",
      period: "Mar 2022 - Present",
      description:
        "- Software developer trainee at Pipefy under the program Young Guns Tech between March/22 and March/23.\n- Currently part of the Design System squad, developing accessible and performant components for the product-focused developers as the end users.\n- Elaborating and writing guidelines focused on improving developer experience, both with coding and code reviews.\n- Developing an entreprise frontend application with React.js, TypeScript, Nextjs, GraphQL and other front-end related tools.\n- Writing tests with Jest and React Testing Library."
    },
    {
      title: "Marketing Manager",
      place: "EJCM",
      description: "",
      period: "Jan 2022 - Mar 2022",
      description: `- Strategic planning and brand image management;
        - Implementation of data-driven culture inside marketing;
        - Implementation of content planning, post schedule and automation based workflow;
        - Leader of the website renewal team.`,
      media: [
        {
          link: "https://ejcm.com.br/",
          title: "EJCM's website",
          img: ejcmImgPath,
        },
      ],
    },
    {
      title: "Front-End Developer | Marketing Consultant",
      place: "EJCM",
      description: "",
      period: "Aug 2021 - Dec 2021",
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
      title: "Desenvolvedor de Software Jr.",
      place: "Pipefy",
      description: "",
      period: "Mar 2022 - Atualmente",
      description:
        "- Desenvolvedor de software trainee pelo programa Young Guns Tech entre março/22 e março/23.\n- Atualmente no time de Design System, elaborando componentes performáticos e acessíveis para uso dos demais times de engenharia.\n- Elaboração e escrita de guidelines focadas em melhorar a experiência dos desenvolvedores, tanto na área de código quanto na de revisão de código.\n- Desenvolvimento de aplicação frontend com ReactJS, Typescript, Nextjs, GraphQL e outras tecnologias relativas ao frontend.\n- Escrita de testes com Jest e React Testing Library.",
    },
    {
      title: "Coordenador de Marketing",
      place: "EJCM",
      description: "",
      period: "Jan 2022 - Mar 2022",
      description: `- Planejamento estratégico e posicionamento de marca;
        - Implementação da cultura de dados e data-driven decisions;
        - Consolidação de calendário e automação de postagem;
        - Coordenação da equipe de reformulação do site institucional.`,
      media: [
        {
          link: "https://ejcm.com.br/",
          title: "Site da EJCM",
          img: ejcmImgPath,
        },
      ],
    },
    {
      title: "Desenvolvedor Front-End | Assessor de Marketing",
      place: "EJCM",
      description: "",
      period: "Ago 2021 - Dez 2021",
      description:
        "- Desenvolvimento de projetos web em React.js e projetos mobile em React Native;\n- Elaboração de posts para redes sociais, redação de artigos para o blog da empresa e planejamento de conteúdo;\n- Membro da Iniciativa de Diversidade e Inclusão, movimento que visa promover práticas de D&I dentro da empresa;\n- Ideação e design de brindes para o aniversário da empresa.",
    },
    {
      title: "Estagiário de Experiência do cliente",
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
};
