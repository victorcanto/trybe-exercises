let container = document.getElementById("header-container");
container.style.backgroundColor = "green";

let emergencyTasks = document.getElementsByClassName("emergency-tasks");
emergencyTasks[0].style.backgroundColor = "orange";

let noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
noEmergencyTasks[0].style.backgroundColor = "yellow";

let urgency = document.querySelectorAll(".emergency-tasks div h3");
for (let index = 0; index < urgency.length; index += 1) {
  urgency[index].style.backgroundColor = "purple";
}
let noUrgency = document.querySelectorAll(".no-emergency-tasks div h3");
for (let nIndex = 0; nIndex < noUrgency.length; nIndex += 1) {
  noUrgency[nIndex].style.backgroundColor = "black";
}
let footer = document.getElementsByTagName("footer");
footer[0].style.backgroundColor = "#484d50";
