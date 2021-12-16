'use strict';
const {createHashPassword} = require('../helpers/bcrypt.helpler');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let demo_pass = await createHashPassword("demo");
     await queryInterface.bulkInsert('Account', [{
        phoneNumber: '09123123123',
        email: 'user1@demo.com',
        fullName: "Ngoc Huy",
        emailConfirmed: true,
        password: demo_pass,
        specialID: "ABCDD"
      }, {
        phoneNumber: '0937046839',
        email: 'user2@demo.com',
        fullName: "Xuan Truong",
        emailConfirmed: true,
        password: demo_pass
      }]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Account', null, {});
  }
};
