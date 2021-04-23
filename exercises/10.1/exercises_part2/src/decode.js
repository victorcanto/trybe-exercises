const decode = (str) => {
  const vowels = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5:'u' };

  let decoded = "";
  for (let index = 0; index < str.length; index += 1) {
    if (vowels[str[index].toLowerCase()]) {
      decoded += vowels[str[index]];
    } else {
      decoded += str[index];
    }
  }
  return decoded;
}

module.exports = decode;
