const bmi = require('./bmi');

const tabelaIMC = () => {
  const valBmi = bmi();
  if (valBmi < 18.5) {
    console.log(`Está abaixo do peso com ${valBmi}`);
  } else if (valBmi >= 18.5 && valBmi < 25) {
    console.log(`Peso normal com ${valBmi}`);
  } else if (valBmi >= 25 && valBmi < 30) {
    console.log(`Está acima do peso com ${valBmi}`);
  } else if (valBmi >= 30 && valBmi < 35) {
    console.log(`Obesidade grau I  com ${valBmi}`);
  } else if (valBmi >= 35 && valBmi < 40) {
    console.log(`Obesidade grau II com ${valBmi}`);
  } else if (valBmi >= 40) {
    console.log(`Obesidade graus III e IV com ${valBmi}`);
  }
}

tabelaIMC();
