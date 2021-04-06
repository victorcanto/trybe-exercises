const checkBet = (bet, numberDrawn) => {
  return bet === numberDrawn;
};

const drawNumbers = (bet, checkBet) => {
  const numberDrawn = Math.floor(Math.random() * 5) + 1;
  return checkBet(bet, numberDrawn)
    ? "Parabéns, você ganhou!"
    : "Tente novamente";
};

console.log(drawNumbers(2, checkBet));
