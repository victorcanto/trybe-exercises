// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

// Pesquisa
const searchEmployee = (id, details) => {
  const professionalById = professionalBoard.find(
    ({ id: employee }) => id === employee
  );
  if (!professionalById) {
    throw new Error("ID não identificada");
  }
  if (!professionalById[details]) {
    throw new Error("Informação indisponível");
  }
  return professionalById[details];
};

console.log(searchEmployee("4678-2", "specialities"));

module.exports = searchEmployee;
