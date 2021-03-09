function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1

const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

function createDayOfCalendary() {
  let days = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let singleDay = dezDaysList[index];
    let daysListItem = document.createElement("li");

    if (singleDay === 24 || singleDay === 31) {
      daysListItem.className = "day holiday";
      daysListItem.innerHTML = singleDay;
      days.appendChild(daysListItem);
    } else if (singleDay === 4 || singleDay === 11 || singleDay === 18) {
      daysListItem.className = "day friday";
      daysListItem.innerHTML = singleDay;
      days.appendChild(daysListItem);
    } else if (singleDay === 25) {
      daysListItem.className = "day holiday friday";
      daysListItem.innerHTML = singleDay;
      days.appendChild(daysListItem);
    } else {
      daysListItem.className = "day";
      daysListItem.innerHTML = singleDay;
      days.appendChild(daysListItem);
    }
  }
}
createDayOfCalendary();

// Exercicio 2

const buttonContainer = document.querySelector(".buttons-container");

function createBtnHoliday(str) {
  let btnHoliday = document.createElement("button");
  btnHoliday.innerHTML = str;
  btnHoliday.id = "btn-holiday";
  buttonContainer.appendChild(btnHoliday);
}
createBtnHoliday("Feriados");

// Exercicio 3

function changeColorDay() {
  let dayHoliday = document.querySelectorAll(".holiday");
  let buttonHoliday = document.getElementById("btn-holiday");
  let colorDay = "yellow";
  let defautColorBtn = "rgb(238,238,238)";

  buttonHoliday.addEventListener("click", function () {
    for (let index = 0; index < dayHoliday.length; index += 1) {
      if (dayHoliday[index].style.backgroundColor === colorDay) {
        dayHoliday[index].style.backgroundColor = defautColorBtn;
      } else {
        dayHoliday[index].style.backgroundColor = colorDay;
      }
    }
  });
}
changeColorDay();

// Exercicio 4

function createBtnFriday(str) {
  let btnFriday = document.createElement("button");
  btnFriday.id = "btn-friday";
  btnFriday.innerHTML = str;
  buttonContainer.appendChild(btnFriday);
}
createBtnFriday("Sexta-feira");

// Exercicio 5
const dezFridays = [4, 11, 18, 25];

function changeTextFriday(arrFridays) {
  let fridayDay = document.querySelectorAll(".friday");
  let buttonFriday = document.getElementById("btn-friday");
  let newTextFriday = "Sextouu!";

  buttonFriday.addEventListener("click", function () {
    for (let index = 0; index < fridayDay.length; index += 1) {
      if (fridayDay[index].innerHTML === newTextFriday) {
        fridayDay[index].innerHTML = arrFridays[index];
      } else {
        fridayDay[index].innerHTML = newTextFriday;
      }
    }
  });
}
changeTextFriday(dezFridays);
