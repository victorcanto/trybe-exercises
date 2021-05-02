const fetch = require('node-fetch');

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

const getDogPicturesAPI = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data;
};

getDogPicturesAPI();

module.exports = {
  generateRandomNumber,
  getUpperCaseString,
  getFirstLetter,
  concatenateString,
  getDogPicturesAPI,
};
