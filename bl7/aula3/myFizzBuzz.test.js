const myFizzBuzz = require('./myFizzBuzz');

describe('Realiza testes na função myFizzBuzz', () => {
  it('Faz um teste na função myFizzBuzz com 15 e deve retornar fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });
  it('Faz um teste na função myFizzBuzz com 6 e deve retornar fizz', () => {
    expect(myFizzBuzz(6)).toMatch('fizz')
  });
  it('Faz um teste na função myFizzBuzz com 10 e deve retornar buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });
  it('Faz um teste na função myFizzBuzz com 8 e deve retornar 8', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  it('Faz um teste na função myFizzBuzz com "x" e deve retornar false', () => {
    expect(myFizzBuzz('x')).toBeFalsy();
  });
});
