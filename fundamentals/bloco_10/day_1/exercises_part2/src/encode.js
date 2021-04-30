const encode = (str) => {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  let encoded = "";
  for (let index = 0; index < str.length; index += 1) {
    if (vowels[str[index].toLowerCase()]) {
      encoded += vowels[str[index]];
    } else {
      encoded += str[index];
    }
  }

  return encoded;
};

module.exports = encode;
