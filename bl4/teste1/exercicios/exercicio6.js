const peca = prompt("Digite uma peça de xadrez!: ");
peca.toLowerCase();
switch (peca){
  case 'peão':
    console.log('Anda 1 casa pra frente.');
    break;
  case 'rainha':
    console.log('Anda para frente, para trás, para os lado e na diagonal quantas casa quiser.');
    break;
  case 'rei':
    console.log('Anda para frente, para trás, para os lado e na diagonal, porém, apenas uma casa.');
    break;
  case 'cavalo':
    console.log('Anda em L');
    break;
  case 'torre':
    console.log('Anda para frente e para trás quantas casas quiser.');
    break;
  case 'bispo':
    console.log('Anda na diagonal, quantas casas quiser');
    break;
  default:
    console.log('Peça inválida!')
}