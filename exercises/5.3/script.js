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
