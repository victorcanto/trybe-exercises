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