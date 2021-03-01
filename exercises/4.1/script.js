// JavaScript - Primeiros passos - Exercicios - ParteII

// const name = 'Victor Canto';
// const birthCity = 'Paudalho'
// let birthYear = 1999;
//   console.log(`Meu nome é ${name}, e nasci no ano de ${birthYear}.`);

// birthYear = 2020;
//   console.log(birthYear);

// // birthCity = 'Carpina';
// console.log(birthCity);

// Resposta do item 6 : Por que o tipo de variável const não pode ser alterado, pois como o nome já diz, é uma constante.

// JavaScript - Primeiros passos - Exercicios - ParteIII

// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';
//   console.log(typeof patientAge);
//   console.log(typeof patientId);

// Exercicio da parteIII
// let base = 5;
// let altura = 8;
// let area = base * altura;
// let perimetro = (base * 2) + (altura * 2);

// console.log(`A base do retangulo é: ${base}`);
// console.log(`A altura do retangulo é: ${altura}`);
// console.log(`A área do retangulo é: ${area}`);
// console.log(`O perimetro do retangulo é: ${perimetro}`);

// Exercicio da parteIV
// let notaDoCandidato = 59;
// if (notaDoCandidato >= 80) {
//   console.log('Parabéns, você foi aprovada(o)');
// } else if(notaDoCandidato < 80 && notaDoCandidato >=60) {
//   console.log('Você está na nossa lista de espera');
// } else {
//   console.log('Você foi reprovada(o)');
// };

// Exercicio da parteV
// let statePeople = "aprovada";
// switch (statePeople) {
//   case "aprovada":
//     console.log("aprovada");
//     break;

//   case "lista":
//     console.log("lista");
//     break;

//   case "reprovada":
//     console.log("reprovada");
//     break;

//   default:
//     console.log("não se aplica");
// }

//Agora a prática - Criar 5 pequenos programas com JS.

//VARIAVEIS UTILIZAAS

// let a = 5;
// let b = 2;
// let c = 50;

// PRIMEIRO PROGRAMA

// let soma = a + b;
// console.log(soma);

// let substracao = a - b;
// console.log(substracao);

// let multiplicacao = a * b;
// console.log(multiplicacao);

// let divisao = a / b;
// console.log(divisao);

// let modulo = a % b;
// console.log(modulo);

// SEGUNDO PROGRAMA

// if (a > b) {
//   console.log(a);
// } else if (b > a) {
//   console.log(b);
// } else {
//   console.log("São iguais");
// }

// TERCEIRO PROGRAMA

// if (a > b && a > c) {
//   console.log(a);
// } else if (a === b && a === c) {
//   console.log("São iguais");
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// QUARTO PROGRAMA

// let valorDef = 7;
// if(valorDef > 0) {
//   console.log('positive')
// } else if(valorDef < 0) {
//     console.log('negative')
// } else {
//     console.log('zero')
// }

// QUINTO PROGRAMA

// let a1 = 30;
// let a2 = 50;
// let a3 = 100;

// let soma = a1 + a2 + a3;

// if (soma === 180) {
//   console.log(true);
// } else if (soma < 0) {
//   console.log("Error");
// } else {
//   console.log(false);
// }

// SEXTO PROGRAMA

// let partName = 'rei';
// let semAcento = partName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
// let convertPartName = semAcento.toLowerCase();

// switch (convertPartName) {
//   case 'rei':
//     console.log('Move-se em qualquer direção, uma casa por vez');
//     break;
  
//   case 'dama':
//     console.log('Move-se em qualquer direção, porém quantas casa quiser, desde que estejam livres');
//     break;
  
//   case 'torre':
//     console.log('Move-se em linha reta, na vertical e horizontal, quantos casas quiser');
//     break;

//   case 'bispo':
//     console.log('Move-se na diagonal, quantas casas quiser');
//     break;

//   case 'cavalo':
//     console.log('Movimento em L');
//     break;

//   case 'peao':
//     console.log('Move-se sempre uma casa a frente');
//     break;

//   default:
//     console.log('error, part is invalid');
// }

// SÉTIMO PROGRAMA

nota = 77;

if(nota >= 90 && nota <= 100){
  console.log('A');
} else if(nota >= 80 && nota < 90) {
  console.log('B');
} else if(nota >= 70 && nota < 80){
  console.log('C');
} else if(nota >= 60 && nota < 70){
  console.log('D');
} else if(nota >= 50 && nota < 60) {
  console.log('F');
} else {
  console.log('Error, is invalid nota');
}