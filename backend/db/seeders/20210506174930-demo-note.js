'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notes",
      [
        {
          note: "pick up milk from the store",
          userid: 1
        },
        {
          note: "This is a google keep clone for notes",
          userid: 1
        },
        {
          note: "Take the dog for a walk tonight",
          userid: 1
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  }
};
