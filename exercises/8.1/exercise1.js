const newEmployees = (newPerson) => {
  const employees = {
    id1: newPerson("Pedro Guerra"),
    id2: newPerson("Luiza Drumond"),
    id3: newPerson("Carla Paiva"),
  };
  return employees;
};

const newPerson = (fullname) => {
  const namechanged = fullname.replace(/\s/g, "").toLowerCase();
  return { nomeCompleto: fullname, email: `${namechanged}@trybe.com` };
};

console.log(newEmployees(newPerson));
