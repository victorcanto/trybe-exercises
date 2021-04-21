function techList(arrTechList, name) {
  if (arrTechList.length === 0) {
    return "Vazio!";
  }
  let listOfTechs = [];
  arrTechList.sort();
  for (let tech of arrTechList) {
    listOfTechs.push({
      tech: tech,
      name,
    });
  }
  return listOfTechs;
}

module.exports = techList;
