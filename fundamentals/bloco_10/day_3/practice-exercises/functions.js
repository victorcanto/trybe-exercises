const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const getUpperCaseString = (str) => {
  return str.toUpperCase();
};

const getFirstLetter = (str) => {
  return str[0];
};

const concatenateString = (str1, str2) => {
  return str1.concat(str2);
};

module.exports = {
  generateRandomNumber,
  getUpperCaseString,
  getFirstLetter,
  concatenateString,
};
