'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(),
      },
      authorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'authors',
          key: 'id',
        },
        field: 'author_id',
      },
      genreId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          key: 'id',
        },
        field: 'genre_id',
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('books');
  },
};