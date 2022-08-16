function encode(palavra) {
  let splitada = palavra.split('');
  for (let letra = 0; letra < splitada.length; letra += 1) {
    switch (splitada[letra]) {
    case 'a':
      splitada[letra] = '1';
      break;
    case 'e':
      splitada[letra] = '2';
      break;
    case 'i':
      splitada[letra] = '3';
      break;
    case 'o':
      splitada[letra] = '4';
      break;
    case 'u':
      splitada[letra] = '5';
      break;
    default: break;
    }
  }
  return splitada.join('');
}
function decode(palavra) {
  let splitada = palavra.split('');
  for (let letra = 0; letra < splitada.length; letra += 1) {
    switch (splitada[letra]) {
    case '1':
      splitada[letra] = 'a';
      break;
    case '2':
      splitada[letra] = 'e';
      break;
    case '3':
      splitada[letra] = 'i';
      break;
    case '4':
      splitada[letra] = 'o';
      break;
    case '5':
      splitada[letra] = 'u';
      break;
    default: break;
    }
  }
  return splitada.join('');
}

module.exports = {encode, decode};
