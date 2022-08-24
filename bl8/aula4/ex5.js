const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const todos = names.join('');
  const arrayTodos = todos.split('');
  const maius = arrayTodos.filter(letter => letter === 'A');
  const minus = arrayTodos.filter(letter => letter === 'a');
  return `Existem ${maius.length} letras A e ${minus.length} letras a.`
}
console.log(containsA());
