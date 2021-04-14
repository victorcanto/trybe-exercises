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

let newKey = "turno";
const turno = "manhã";

const addMorningShift = (obj, key, value) => {
  obj[key] = value;
  return obj;
};
console.log(addMorningShift(lesson2, newKey, turno));

const listObjKeys = (obj) => {
  return Object.keys(obj);
}
console.log(listObjKeys(lesson1));

const showSizeObj = (obj) => {
  return Object.keys(obj).length;
}
console.log(showSizeObj(lesson2));

const listObjValues = (obj) => {
  return Object.values(obj);
}
console.log(listObjValues(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const getTotalStudents = (obj) => {
  let total = 0;
  const objKeys =  Object.keys(obj);
  for (index in objKeys) {
    total += obj[objKeys[index]].numeroEstudantes;
  }
  return total;
}
console.log(getTotalStudents(allLessons));