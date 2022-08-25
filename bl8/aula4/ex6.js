const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
//   const lista = [];
//   const array = grades.reduce((acc, crr, index) => {
//     acc['name'] = students[index]
//     acc['average'] = crr.reduce((acc2, crr2) => acc2 + crr2) / crr.length
//     lista.push(Object.assign({}, acc))
//     return acc
//   }, {})
//   return lista
// }
function studentAverage() {
  return students.map((nome, index) => ({
    name: nome,
    average: grades[index].reduce((acc, crr) => acc + crr) / grades[index].length
  }))
}
console.log(studentAverage())

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
