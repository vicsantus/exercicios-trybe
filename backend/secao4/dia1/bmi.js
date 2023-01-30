const rdl = require('readline-sync');

const bmi = () => {
  const weight = rdl.questionFloat('Digite o peso em KG: ');
  const height = rdl.questionFloat('Digite a altura em M: ');

  return weight / (height ^ 2)
}

module.exports = bmi;
