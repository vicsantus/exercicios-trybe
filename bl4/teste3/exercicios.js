let fat = 10;
let result = 1;
for (let mult = fat; mult >= 1; mult--){
  result *= mult;
}
console.log(result);

let word = 'tryber';
let lista = [];
for (let x of word){
  lista.push(x);
}
lista.reverse();
console.log(lista);

let maior = 'x';
let menor = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
let array = ['java', 'javascript', 'python', 'html', 'css'];
for (let x = 0; x < array.length; x++){
  if (array[x].length > maior.length){
    maior = array[x]
  }
  if (array[x].length < menor.length){
    menor = array[x]
  }
}
console.log('Maior é:', maior);
console.log('Menor é', menor);

let maiorPrimo = 0;
let cont = 1;
for (let x = 50; x >= 2; x--){
  for (let y = 2; y <= x; y++){
    if (x % y === 0){
      cont++;
    }
  }
  if (cont === 2 && x > maiorPrimo){
    maiorPrimo = x;
  }
  cont = 1;
}
console.log('O maior primo é o numero:', maiorPrimo);
