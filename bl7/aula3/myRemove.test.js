const myRemove = require('./myRemove');

describe('Testa a funcionalidade da função myRemove', () => {
  it('Testa se a função myRemove remove o 3 da lista [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  })
  it('Testa se a função myRemove dando como argumento [1, 2, 3, 4] e 3, retorna a mesma lista', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('Testa se a função myRemove adiciona o 5 a lista [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
});
