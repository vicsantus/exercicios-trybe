let a = Math.floor(Math.random() * 50)
let b = Math.floor(Math.random() * 50)
let c = Math.floor(Math.random() * 50)
if (a >= b && a >= c){
  console.log('O número',a,'é o maior número.')
} else if (b >= a && b >= c){
  console.log('O número',b,'é o maior número.')
} else {
  console.log('O número',c,'é o maior número.')
}
console.log(a, b, c)