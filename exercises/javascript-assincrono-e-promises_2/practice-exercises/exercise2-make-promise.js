const sumRandomNumber = () => {
  const array = [];
  const randomNumber = () => Math.floor(Math.random() * 50) + 1;
  for (let index = 0; index < 10; index += 1) {
    array.push(randomNumber());
  }
  const sum = array
    .map((number) => number * number)
    .reduce((acc, currentNumber) => acc + currentNumber);
  if (sum >= 8000) throw new Error();
  return sum;
};

const sumArrFromSum = (sum) => {
  const division = [2, 3, 5, 10];
  return division.map((number) => sum / number).reduce((acc, cur) => acc + cur);
};

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumber();
    const sumFromSum = await sumArrFromSum(sum);
  }
  catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
