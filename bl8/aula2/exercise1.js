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
function authorBornIn1947() {
  return books.find(elem => elem.birthYear === 1947).name;
}

function smallerName() {
  let nameBook = books[0].name;
  books.forEach(element => element.name.length <= nameBook.length ? nameBook = element.name : false)
  return nameBook;
}

function getNamedBook() {
  return books.find(elem => elem.name.length === 26);
}

function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => b.releaseYear - a.releaseYear);
}

function everyoneWasBornOnSecXX() {
  return books.every(elem => elem.birthYear > 1900);
}

function someBookWasReleaseOnThe80s() {
  return books.some(elem => elem.releaseYear >= 1980 && elem.releaseYear < 1990);
}

function authorUnique() {
  return books.every(book => !books.some(bookSome => ((bookSome.birthYear === book.birthYear) && (bookSome.author.name !== book.author.name))));
}

console.log(authorUnique())