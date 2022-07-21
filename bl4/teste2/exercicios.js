let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
let menor = numbers[0];
let impar = 0;
for (let x of numbers){
  console.log(x);
  if (x > maior){
    maior = x;
  } else if (x < menor){
    menor = x;
  }
  if (x % 2 !== 0){
    impar++;
  }
}
let cont = 0;
for (let x of numbers){
  cont += x;
}
console.log(cont);
let media = cont / numbers.length
console.log(media);
if (media > 20){
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
console.log('O maior número é o',maior);
console.log('Existem',impar,'números impares');
console.log('O menor número é o',menor);

let tabela = [];
for (let n = 1; n <= 25; n++){
  tabela.push(n);
}
console.log(tabela);
for (let div of tabela){
  console.log(div,'divido por 2 =', div / 2);
}

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

numbers.reverse();
console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let x = 0; x < numbers.length; x++){
  if (x === numbers.length - 1){
    numbers[numbers.length - 1] = 27 * 2;
  } else {
    numbers[x] = numbers[x] * numbers[x + 1];
  }
}
console.log(numbers);
