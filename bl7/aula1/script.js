const botao = document.querySelector('#botao');
const cliques = document.querySelector('#valor');

let clickCount = 0;
cliques.innerHTML = clickCount;

botao.addEventListener('click', () => {
  clickCount = clickCount + 1
  cliques.innerHTML = clickCount
});
