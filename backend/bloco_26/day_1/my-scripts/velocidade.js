const { questionInt } = require('readline-sync');

const DISTANCE_METERS = questionInt('Qual a distância em metros? ');
const TIME_SECONDS = questionInt('Qual o tempo em segundos? ');

function getAverageSpeed(distance, time) {
  const avgSpeed = distance / time;
  console.log(`A velocidade média do carro é: ${avgSpeed} m/s`);
  return avgSpeed;
}

getAverageSpeed(DISTANCE_METERS, TIME_SECONDS);
