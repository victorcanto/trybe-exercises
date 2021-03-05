// Parte I - Buscando elementos

// 1
let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
// 2
let pai = ondeVoceEsta.parentNode;
pai.style.color = "blue";
// 3
let firstSonOfSon = document.getElementById("elementoOndeVoceEsta")
  .firstElementChild;
firstSonOfSon.innerText = "Eu sou o filho do filho";
// 4
let firstSon = pai.firstChild;
// 5
firstSon = ondeVoceEsta.previousElementSibling;
// 6
let warning = ondeVoceEsta.nextSibling;
// 7
let thirdChild = ondeVoceEsta.nextElementSibling;
// 8
thirdChild = pai.childNodes[5];

// Parte 2 - Criando elementos

// 1. Crie um irmão para elementoOndeVoceEsta
let brotherOfOndeVoceEsta = document.createElement("div");
pai.appendChild(brotherOfOndeVoceEsta);
// 2. Crie um filho para elementoOndeVoceEsta
let sonOfOndeVoceEsta = document.createElement("div");
ondeVoceEsta.appendChild(sonOfOndeVoceEsta);
// 3. Crie um filho para primeiroFilhoDoFilho
let sonOfPrimeiroFilhoDoFilho = document.createElement("div");
firstSonOfSon.appendChild(sonOfPrimeiroFilhoDoFilho);
// 4. A partir desse filho criado, acesse terceiroFilho
sonOfPrimeiroFilhoDoFilho.parentNode.parentNode.parentNode.childNodes[5];

// Parte 3 - Removendo elementos - Não achei uma solução
let paiDoPai = document.getElementById("paiDoPai");
let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
let elementPai = document.getElementById("pai");
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
