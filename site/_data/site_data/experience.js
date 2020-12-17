const experienceLinksImgPath = "other_links/";
const siacImgPath = `${experienceLinksImgPath}siac.png`;

module.exports = {
  "en-us": [
    {
      title: "Customer Experience Intern",
      place: "Naturgy Brasil",
      description:
        "- Developing layout and funcionality changes for the internal and external Zendesk Help Centers;\n- Working with HTML, CSS, Javascript and Zendesk Curlybars;\n- E-marketing layouts planning and development;\n-Application and analysis of customer satisfaction surveys.",
      period: "Jan 2020 - Present",
    },
    {
      title: "Extensionist",
      place: "Federal University of Rio de Janeiro",
      description:
        "Extensionist at the UFRJ's Pro-rectory of Academic Extension Programs.\nIntegrated the development team for the new UFRJ SIAc (Academic Integration Week) website, collaborating with the internal design and backend development teams.",
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
      title: "Estagiária de Experiência do cliente",
      place: "Naturgy Brasil",
      description:
        "- Atualizações de layout e criação de funcionalidades para as centrais de ajuda internas e externas da empresa;\n- Planejamento e montagem de layouts de e-mail marketing;\n- Aplicação e análise de pesquisas de satisfação.",
      period: "Jan 2020 - Atualmente",
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
