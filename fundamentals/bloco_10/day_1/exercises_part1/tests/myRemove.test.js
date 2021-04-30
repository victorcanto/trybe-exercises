const { it, expect } = require('@jest/globals');
const myRemove = require('../src/myRemove');

describe('myRemove', () => {
  it('myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  })
  it('myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  })
  const param = [1, 2, 3, 4];
  it('Verifica se o array não sofreu alterações', () => {
    expect(param.length).not.toEqual(myRemove(param, 1).length);
  })
  it('myRemove([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    expect([ 1, 2, 3, 4 ]).toEqual(myRemove([1, 2, 3, 4], 5));
  })
})