const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Script = sequelize.define('Script', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(50),
    },
    conteudo: {
        type: DataTypes.TEXT,
    }
},{ engine: 'MYISAM', sequelize, modelName: 'Script' });

//sequelize.sync();

module.exports = Script;
