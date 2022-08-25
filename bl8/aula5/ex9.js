// yearSeasons: estações do ano.
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
const {winter, spring, summer, autumn} = yearSeasons;
const ano = [...winter, ...spring, ...summer, ...autumn];
console.log(ano);
