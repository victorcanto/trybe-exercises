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
