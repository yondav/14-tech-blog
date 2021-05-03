const sequelize = require('../config/connection.js');
const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    email: 'user_one@email.com',
    username: 'user_one',
    password: 'password1',
  },
  {
    email: 'user_two@email.com',
    username: 'user_two',
    password: 'password2',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
