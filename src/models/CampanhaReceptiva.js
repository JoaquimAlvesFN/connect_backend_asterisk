/*const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Scripts = require('./Script');

const CampanhaReceptiva = sequelize.define('CampanhaReceptiva', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    data_inicial:{
        type: DataTypes.DATE,
    },
    data_final:{
        type: DataTypes.DATE,
    },
    scriptId:{
        type: DataTypes.INTEGER,
        references: {
            model: Scripts,
            key: 'id'
        },
        allowNull: false,
    },
}, { 
    sequelize: sequelize, 
    modelName: 'CampanhaReceptiva' 
});

sequelize.sync();

module.exports = CampanhaReceptiva;
*/