// Sugestão de respostas a serem validadas.
const correctAnswer = "higher order function";
const userAnswer = "HIGHER ORDER FUNCTION";

const checkAnswer = (feedback) => (personResponse) => {
  const answer = personResponse.toLowerCase();

  return feedback === answer ? true : false;
};

console.log(checkAnswer(correctAnswer)(userAnswer));
