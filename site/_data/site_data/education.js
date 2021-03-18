const cra = 9.3

module.exports = {
  "en-us": [
    {
      name: "Federal University of Rio de Janeiro",
      title: "B.A in Communications - Editorial Production",
      info: "Bachelor Degree in Communications - Editorial Production, currently on fourth semester.",
      gpa: "GPA: " + ((cra * 4) / 10).toFixed(2),
      period: "Mar 2019 - Atualmente",
    },
    {
      name: "Colégio Pedro II",
      title: "High School with Associate Degree in Software Development",
      period: "Mar 2016 - Nov 2018",
    },
  ],
  "pt-br": [
    {
      name: "Universidade Federal do Rio de Janeiro",
      title: "Bacharelado em Comunicação Social - Produção Editorial",
      info: "Bacharelado em Comunicação Social com habilitação em Produção Editorial. Atualmente no 4º período.",
      gpa: `C.R.A ${cra}`,
      period: "Mar 2019 - Atualmente",
    },
    {
      name: "Colégio Pedro II",
      title: "Ensino Médio Técnico em Desenvolvimento de Sistemas",
      info: "Concluído com entrega de trabalho de conclusão de curso.",
      period: "Mar 2016 - Nov 2018",
    },
  ],
}
