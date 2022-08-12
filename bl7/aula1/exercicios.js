// Ex1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);

// Ex2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = array => array.sort((a, b) => a - b);

console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉

// Ex3
const facto = num => num < 0 ? -1 : (num === 0 ? 1 : num * facto(num - 1));

console.log(facto(5));

// Ex4
const maiorPalavra = (frase) => frase.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(maiorPalavra('A maior palavra é essa asfjslfslfjlaksdjfoib'))

// Ex5
const substX = (frase, nome) => {
  let list = frase.split(' ')
  list.splice(list.indexOf('x'), 1, nome)
  let junta = list.join(' ')
  return junta;
}

console.log(substX('Tryber x aqui!', 'alberto'))