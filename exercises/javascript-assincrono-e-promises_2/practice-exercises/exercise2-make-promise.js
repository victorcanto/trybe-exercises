const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const array = [];

    const randomNumber = () => Math.floor(Math.random() * 50) + 1;
    for (let index = 0; index < 10; index += 1) {
      array.push(randomNumber());
    }

    const sum = array
      .map((number) => number * number)
      .reduce((acc, currentNumber) => acc + currentNumber);

    sum < 8000 ? resolve(sum) : reject(sum);
  });
  const division = [2, 3, 5, 10];
  myPromise
    .then((sum) => division.map((number) => sum / number))
    .then((arr) => arr.reduce((acc, cur) => acc + cur), 0)
    .catch(() =>
      console.log("É mais de oito mil! Essa promise deve estar quebrada!")
    );
};

fetchPromise();
