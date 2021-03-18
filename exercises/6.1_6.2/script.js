function pikaday() {
  var picker = new Pikaday({ field: document.getElementById("datepicker") });
}

const state = document.getElementById("state");
const brazilStates = {
  "": "Selecione seu estado",
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goías",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraíma",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

function selectState() {
  for (let brStates in brazilStates) {
    const states = document.createElement("option");
    states.innerHTML = brazilStates[brStates];
    states.className = brStates.toLowerCase();
    states.value = brStates.toLowerCase();
    state.appendChild(states);
  }
}

function checkAllData() {
  const inputs = document.querySelectorAll("input");
  for (let index = 0; index < inputs.length; index += 1) {
    const allData = inputs[index].value;
    if (allData == "") {
      alert("Informações faltando, verifique se há algum campo vazio");
      return false;
    }
    return allData;
  }
}

function createDivFormData(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  const divFormData = document.getElementById("div_form_data");
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].type === "radio" && !inputs[index].checked) {
      continue;
    }
    const userData = inputs[index].value;
    if (checkAllData() && pikaday()) {
      const divConsolidation = document.createElement("div");
      divConsolidation.innerHTML = userData;
      divFormData.appendChild(divConsolidation);
    }
  }
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", createDivFormData);

window.onload = () => {
  selectState();
  pikaday();
};
