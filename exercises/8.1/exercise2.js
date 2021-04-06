const checkBet = (bet, numberDrawn) => {
  return bet === numberDrawn;
};

const drawNumbers = (bet, checkBet) => {
  const numberDrawn = Math.floor(Math.random() * 5) + 1;
  if (checkBet(bet, numberDrawn)) return "Parabéns, você ganhou!";
  return "Tente novamente";
};

console.log(drawNumbers(2, checkBet));
