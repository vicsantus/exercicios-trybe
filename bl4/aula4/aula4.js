//Ex1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda,", info.personagem);

//Ex2
info.recorrente = "Sim";
console.log(info);

//Ex3
for (let x in info){
  console.log(x);
}

//Ex4
for (let x in info){
  console.log(info[x]);
}

//Ex5
let info2 = {
  personagem: 'Margarida e Tio Patinhas',
  origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
  recorrente: "Ambos recorrentes"
};

for (let x in info2){
  console.log(info2[x]);
}

//Ex6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log("O livro favorito de", leitor.nome, leitor.sobrenome,"se chama '"+leitor.livrosFavoritos[0].titulo+"'");

//Ex7
leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

//Ex8
console.log(leitor.nome,"tem", leitor.livrosFavoritos.length,"livros favoritos")