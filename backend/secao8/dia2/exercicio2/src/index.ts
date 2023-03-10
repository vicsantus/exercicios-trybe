import Author from './database/models/Author';
import Book from './database/models/Book';

(async () => {
  const books = await Book.findAll({ raw: true });
  console.table(books);

const author = await Author.findAll({ raw: true });
console.table(author);

// const booksWithAuthors = await Book.findAll({ raw: true, include: ['books'] });
// console.table(booksWithAuthors);
process.exit(0);

})();