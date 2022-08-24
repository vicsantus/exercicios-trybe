const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const array = [];
  arrays.forEach(element => {
    element.forEach(ele => array.push(ele))
  })
  return array
}
console.log(flatten());