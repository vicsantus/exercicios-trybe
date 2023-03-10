import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

import Author from './Author';


class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING(),
    allowNull: false,
  },
  authorId: {
    type: INTEGER,
    allowNull: false,
  },
  genreId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'books',
  underscored: true,
  timestamps: false,
});

Author.hasMany(Book);
Book.belongsTo(Author);


export default Book;