const rightAnswers = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const studentAnswers = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const checkAnswers = (feedback, answers) => {
  let sum = 0;
  for (let index = 0; index < feedback.length; index += 1) {
    feedback[index] === answers[index]
      ? (sum += 1)
      : answers[index] === "N.A"
      ? (sum += 0)
      : (sum -= 0.5);
  }
  return sum;
};

const tellRightAnswers = (feedback, answers, checkAnswers) => {
  return `O número de respostas corretas é: ${checkAnswers(feedback, answers)}`;
};

console.log(tellRightAnswers(rightAnswers, studentAnswers, checkAnswers));
