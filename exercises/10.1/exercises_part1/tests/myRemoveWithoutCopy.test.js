const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy');

describe('myRemoveWithoutCopy', () => {
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna [ 1, 2, 4 ]', () => {
    expect([ 1, 2, 4 ]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3))
  })
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3))
  })
  const array = [1, 2, 3, 4];
  it('Verifica se o array passado sofreu alterações', () => {
    expect(array).toEqual(myRemoveWithoutCopy(array, 3));
  })
  it('myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna [ 1, 2, 3, 4 ]', () => {
    expect([ 1, 2, 3, 4 ]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));
  })
})