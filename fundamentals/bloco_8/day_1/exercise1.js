const newEmployees = (newPerson) => {
  const employees = {
    id1: newPerson("Pedro Guerra"),
    id2: newPerson("Luiza Drumond"),
    id3: newPerson("Carla Paiva"),
  };
  return employees;
};

const newPerson = (fullname) => {
  // usei a ref: https://pt.stackoverflow.com/questions/382479/removendo-todos-os-espa%C3%A7os-de-uma-string-usando-javascript para remover os espaços do fullname.
  const namechanged = fullname.replace(/\s/g, "").toLowerCase();
  return { nomeCompleto: fullname, email: `${namechanged}@trybe.com` };
};

console.log(newEmployees(newPerson));
