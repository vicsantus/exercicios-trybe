function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
function feriados() {
  let divBotao = document.querySelector('.buttons-container');
  divBotao.appendChild(document.createElement('button'));
  divBotao.children[0].id = 'btn-holiday';
  divBotao.children[0].innerHTML = 'Feriados';
}
function trocaCor() {
  let diasFeriados = document.getElementsByClassName('holiday');
  for (let cor = 0; cor < diasFeriados.length; cor += 1) {
    if (diasFeriados[cor].style.backgroundColor !== 'white') {
      diasFeriados[cor].style.backgroundColor = 'white';
    } else {
      diasFeriados[cor].style.backgroundColor = '#eee';
    }
  }
}
function sextou() {
  let divBotao = document.querySelector('.buttons-container');
  divBotao.appendChild(document.createElement('button'));
  divBotao.children[1].id = 'btn-friday';
  divBotao.children[1].innerHTML = 'Sexta-feira';
}
function trocaSextou() {
  let sextas = document.querySelectorAll('.friday');
  for (let dia of sextas) {
    if (dia.innerHTML !== 'Sextou!') {
      dia.value = dia.innerHTML;
      dia.innerHTML = 'Sextou!';
    } else {
      dia.innerHTML = dia.value;
      dia.value = 0;
    }
  }
}
function zoomin(origem) {
  origem.target.style.fontSize = '30px';
  origem.target.style.fontWeight = 'bold';
}
function zoomout(origem) {
  origem.target.style.fontSize = '20px';
  origem.target.style.fontWeight = '';
}
function adicionaEvento() {
  let tarefas = document.querySelector('.my-tasks');
  tarefas.appendChild(document.createElement('span'));
  tarefas.children[tarefas.children.length - 1].className = 'tasks';
  tarefas.children[tarefas.children.length - 1].innerHTML = 'Projeto:';
}
function legendaCor(cor) {
  tarefas.appendChild(document.createElement('div'));
  let elemento = tarefas.children[tarefas.children.length - 1];
  elemento.className = 'task';
  elemento.style.backgroundColor = cor;
}
function trocaClasse() {
  if (botaoCor.className === 'task') {
    botaoCor.className += ' selected';
    botaoCor.style.border = '3px solid black';
  } else {
    botaoCor.className = 'task';
    botaoCor.style.border = '1px solid black';
  }
}
function atribCorDia(origem) {
  if (origem.target.style.color === 'rgb(119, 119, 119)' && botaoCor.className === 'task selected') {
    origem.target.style.color = document.querySelector('.task').style.backgroundColor;
  } else if (origem.target.style.color !== 'rgb(119, 119, 119)' && botaoCor.className === 'task selected') {
    origem.target.style.color = 'rgb(119, 119, 119)';
  }
}



let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
for (let x in decemberDaysList) {
  let dia = decemberDaysList[x];
  days.appendChild(document.createElement('li'));
  days.children[x].innerHTML = dia;
  days.children[x].className = 'day';
  days.children[x].style.color = 'rgb(119,119,119)';
  if (dia === 24 || dia === 25 || dia === 31) {
    days.children[x].className += ' holiday';
  }
  if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
    days.children[x].className += ' friday';
  }
  days.children[x].addEventListener('mouseover', zoomin);
  days.children[x].addEventListener('mouseout', zoomout);
  days.children[x].addEventListener('click', atribCorDia);
}

createDaysOfTheWeek();
feriados();
sextou();
adicionaEvento();

let botaoFeriado = document.querySelector('.buttons-container').children[0];
let botaoSextou = document.querySelector('.buttons-container').children[1];
let botaoEvento = document.querySelector('#btn-add');
let caixinha = document.querySelector('#task-input');
let tarefas = document.querySelector('.my-tasks');
let dias = document.querySelectorAll('.day');

legendaCor('green')
let botaoCor = document.querySelector('.task');


botaoFeriado.addEventListener('click', trocaCor);
botaoSextou.addEventListener('click', trocaSextou);
botaoCor.addEventListener('click', trocaClasse);
