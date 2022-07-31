function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
for (let x in decemberDaysList) {
  let dia = decemberDaysList[x];
  days.appendChild(document.createElement('li'));
  days.children[x].innerHTML = dia;
  days.children[x].className = 'day';
  if (dia === 24 || dia === 25 || dia === 31) {
    days.children[x].className += ' holiday';
  }
  if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
    days.children[x].className += ' friday';
  }
  days.children[x].addEventListener('mouseover', zoomin);
  days.children[x].addEventListener('mouseout', zoomout);
}
function feriados() {
  let divBotao = document.querySelector('.buttons-container');
  divBotao.appendChild(document.createElement('button'));
  divBotao.children[0].id = 'btn-holiday';
  divBotao.children[0].innerHTML = 'Feriados';
}
function trocaCor(){
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
    if (dia.innerHTML !== 'Sextou') {
      dia.value = dia.innerHTML;
      dia.innerHTML = 'Sextou';
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


feriados();
sextou();
let botaoFeriado = document.querySelector('.buttons-container').children[0];
let botaoSextou = document.querySelector('.buttons-container').children[1];

botaoFeriado.addEventListener('click', trocaCor);
botaoSextou.addEventListener('click', trocaSextou);

