const sum = require('../src/sum');

describe('sum', () => {
  it('A soma de 4 e 5 é 9', () => {
    expect(9).toBe(sum(4, 5));
  })
  it('A soma de 0 e 0 é 0', () => {
    expect(0).toBe(sum(0, 0));
  })
  it('A soma do número 4 e a string "5" gera um erro', () => {
    expect(() => sum(4, '5')).toThrow();
  })
  it('A soma do número 4 e a string "5" gera um erro com a mensagem: parameters must be numbers ', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  })
});