// escreva greet abaixo
function greet(name, aceno = 'Hi') {
  return `${aceno} ${name}`
}

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
