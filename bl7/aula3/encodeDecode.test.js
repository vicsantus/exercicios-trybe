const {encode, decode} = require('./encodeDecode');

describe('Realiza testes nas funções encode e decode', () => {
  it('Realiza teste no encode para verificar se é uma função', () => {
    expect(typeof encode).toMatch('function');
  });
  it('Realiza teste no decode para verificar se é uma função', () => {
    expect(typeof decode).toMatch('function');
  });
  it('Verifica o encode com a, e, i, o, u para retornar "1, 2, 3, 4, 5"', () => {
    expect(encode('a, e, i, o, u')).toMatch('1, 2, 3, 4, 5');
  });
  it('Verifica o encode com "1, 2, 3, 4, 5" para retornar a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toMatch('a, e, i, o, u');
  });
  it('Verifica se o encode ao testar "testa ai" retorna "t2st1 13"', () => {
    expect(encode('testa ai')).toMatch('t2st1 13');
    expect(encode('testa ai')).toHaveLength(8);
  });
  it('Verifica se o decode ao testar "208793h41" retorna "e0879ihoa"', () => {
    expect(decode('208793h41')).toMatch('e0879ihoa');
    expect(decode('208793h41')).toHaveLength(9);
  });
});
