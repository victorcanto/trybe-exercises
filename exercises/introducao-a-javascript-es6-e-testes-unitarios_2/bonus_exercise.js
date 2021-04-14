const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const countStudentsWhoAttendedClasse = (obj) => {
  const keys = Object.keys(obj);
  let total = 0;
  for (let idx in keys) {
    obj[keys[idx]].materia === "Matemática"
      ? (total += obj[keys[idx]].numeroEstudantes)
      : null;
  }
  return total;
};
console.log(countStudentsWhoAttendedClasse(allLessons));

const getReportObj = (obj, teacher) => {
  const keys = Object.keys(obj);
  const report = { professor: '', aulas: [], estudantes: 0 }
  let total = 0
  for(let idx in keys) {
    if(obj[keys[idx]].professor === teacher) {
      total += obj[keys[idx]].numeroEstudantes;
     report.professor = obj[keys[idx]].professor;
     report.aulas.push(obj[keys[idx]].materia);
     report.estudantes = total
    } 
  }
  return report;
}
console.log(getReportObj(allLessons, 'Maria Clara'));
