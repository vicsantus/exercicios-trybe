const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function formatedBookNames(data) {
  return data.map(livro => `${livro.name} - ${livro.genre} - ${livro.author.name}`)
}

console.log(formatedBookNames(books));


function nameAndAge(data) {
  const novoObj = data.map(livro => ({
    age: (livro.releaseYear - livro.author.birthYear),
    author: livro.author.name,
  }));
  novoObj.sort((a, b) => a.age - b.age);
  return novoObj
}
console.log(nameAndAge(books));


function fantasyOrScienceFiction(data) {
  return data.filter(livro => (livro.genre === 'Fantasia' || livro.genre === 'Ficção Científica'));
}
console.log(fantasyOrScienceFiction(books));


function oldBooksOrdered(data) {
  const livro60 = data.filter(livro => (2022 - livro.releaseYear) > 60);
  livro60.sort((a, b) => a.releaseYear - b.releaseYear);
  return livro60
}
console.log(oldBooksOrdered(books));
