const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Conta = sequelize.define('Conta', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    conta: {
        type: DataTypes.INTEGER(50),
    },
    credito: {
        type: DataTypes.INTEGER(50),
    },
    minutos: {
        type: DataTypes.INTEGER(50),
    },
},{ engine: 'MYISAM', sequelize: sequelize, modelName: 'Conta' });

//sequelize.sync();

module.exports = Conta;