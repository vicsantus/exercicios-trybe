//Ex1
function palin(palavra){
  let splitado = palavra.split("");
  let revertido = splitado.reverse();
  let juntado = revertido.join("");
  if (palavra === juntado){
    return true;
  } else {
    return false;
  }
}
console.log(palin('careca'));

//Ex2
let array = [2, 3, 6, 7, 10, 1];

function maiorIndex (lista){
  let maiorNum = 0;
  let indexMaior = 0;
  for (let x = 0; x < lista.length; x++){
    if (lista[x] > maiorNum){
      maiorNum = lista[x];
      indexMaior = x;
    }
  }
  return indexMaior;
}
console.log(maiorIndex(array));

//Ex3
function menorIndex (lista){
  let menorNum = 99999999;
  let indexMenor = 0;
  for (let x = 0; x < lista.length; x++){
    if (lista[x] < menorNum){
      menorNum = lista[x];
      indexMenor = x;
    }
  }
  return indexMenor;
}
console.log(menorIndex(array));

//Ex4
function maiorQt (array){
  let maior = '';
  for (let x in array){
    if (array[x].length > maior.length){
      maior = array[x];
    }
  }
  return maior;
}

console.log(maiorQt(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//Ex5
function maisRepetido (lista){
  let maiorRep = 0;
  let numMaisRep = 0;
  for (let val of lista){
    let cont = 0;
    for (let x of lista){
      if (val === x){
        cont++
      }
    }
    if (cont > maiorRep){
      maiorRep = cont;
      numMaisRep = lista[val];
    }
  }
  return numMaisRep;
}
console.log(maisRepetido([2, 1, 3, 2, 1, 5, 1, 8, 2, 1, 3]));

//Ex6
function fatorialSomado(valor){
  let soma = valor;
  for (let val = valor; val > 0; val--){
    soma = soma + (val - 1);
  }
  return soma;
}

console.log(fatorialSomado(5))

//Ex7
function finalPalavra(palavra, final){
  let splitado = palavra.split("");
  let revertido = splitado.reverse();
  let juntadoPalavra = revertido.join("");

  splitado = final.split("");
  revertido = splitado.reverse();
  let juntadoFinal = revertido.join("");

  for (let x = 0; x < juntadoFinal.length; x++){
    console.log(juntadoPalavra[x], juntadoFinal[x])
    if (juntadoPalavra[x] !== juntadoFinal[x]){
      return false;
    }
  }
  return true;
}
console.log(finalPalavra('trybe', 'be'))