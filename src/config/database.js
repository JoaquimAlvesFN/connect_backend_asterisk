require('dotenv/config');
const {Sequelize} = require('sequelize');

// Option 1: Passing parameters separately
const {IP, DB_USER, DB_PASS, DB} = process.env;
const sequelize = new Sequelize(DB, DB_USER, DB_PASS, {
  host: IP,
  dialect: 'mysql'
});

module.exports = sequelize;