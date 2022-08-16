const sum = require('./sum');

describe('Testes da função sum', () => {
  it('Testa se a soma de 4 e 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  
  it('Testa se a soma de 0 e 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it('Testa se a soma de 4 e "5" é um erro', () => {
    expect(() => sum(4, '5').toThrow('parameters must be numbers'))
  })
})