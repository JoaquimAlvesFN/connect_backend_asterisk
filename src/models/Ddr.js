const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ddr = sequelize.define('ddr', {
    id: {
        type: DataTypes.INTEGER(11), 
        primaryKey: true,
        autoIncrement: true,
    },
    ddr: {
        type: DataTypes.INTEGER(20),
    },
    fila: {
        type: DataTypes.INTEGER(20),
    },
}, {sequelize, modelName: 'ddr'});

//sequelize.sync();

module.exports = Ddr;

