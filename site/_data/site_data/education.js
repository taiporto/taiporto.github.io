const craUFF = undefined;
const craUFRJ = 9.4;

module.exports = {
  "en-us": [
    {
      name: "Fluminense Federal University",
      title: "B.A in Information Systems",
      info: "Bachelor Degree in Information Systems, currently on first semester.",
      gpa: craUFF ? `GPA: ${((craUFF * 4) / 10).toFixed(2)}` : "",
      period: "Aug 2022 - Present",
    },
    {
      name: "Federal University of Rio de Janeiro",
      title: "B.A in Communications - Book Publishing",
      info: "Bachelor Degree in Communications with a focus on Book Publishing, currently on sixth semester.",
      gpa: "GPA: " + ((craUFRJ * 4) / 10).toFixed(2),
      period: "Mar 2019 - Mar 2022 (Unfinished)",
    },
    {
      name: "Colégio Pedro II",
      title: "High School with Associate Degree in Software Development",
      period: "Mar 2016 - Nov 2018",
    },
  ],
  "pt-br": [
    {
      name: "Universidade Federal Fluminense",
      title: "Bacharelado em Sistemas de Informação",
      info: "Atualmente no 1º período.",
      gpa: craUFF ? `C.R.A: ${craUFF}` : "",
      period: "Ago 2022 - Atualmente",
    },
    {
      name: "Universidade Federal do Rio de Janeiro",
      title: "Bacharelado em Comunicação Social - Produção Editorial",
      info: "Bacharelado em Comunicação Social com habilitação em Produção Editorial. Atualmente no 6º período.",
      gpa: `C.R.A: ${craUFRJ}`,
      period: "Mar 2019 - Mar 2022 (Não finalizado)",
    },
    {
      name: "Colégio Pedro II",
      title: "Ensino Médio Técnico em Desenvolvimento de Sistemas",
      info: "Concluído com entrega de trabalho de conclusão de curso.",
      period: "Mar 2016 - Nov 2018",
    },
  ],
};
