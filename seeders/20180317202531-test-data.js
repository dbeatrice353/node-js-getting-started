'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('FormEntries',[
          { value: 'foo' },
          { value: 'bar' },
          { value: 'spam'}], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('FormEntries', null, {});
  }
};
