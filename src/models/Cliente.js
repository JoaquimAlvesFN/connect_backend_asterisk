const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fila = require('./Queue');
const Conta = require('./Conta');

const Cliente = sequelize.define('Cliente',{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(50),
    },
    email: {
        type: DataTypes.STRING(50),
    },
    senha: {
        type: DataTypes.STRING(255),
    },
    cpf_cnpj: {
        type: DataTypes.INTEGER(20),
    },
    cep: {
        type: DataTypes.STRING(11),
    },
    logradouro: {
        type: DataTypes.STRING(50),
    },
    numero: {
        type: DataTypes.INTEGER(10),
    },
    conta_id: {
        type: DataTypes.INTEGER,
        field: 'conta_id',
        references: {
            model: Conta,
            key: 'id',
        },
    },
    fila_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Fila,
            key: 'id',
        },
    },
}, { engine: 'MYISAM', sequelize: sequelize, modelName: 'Cliente', } );

//sequelize.sync();

module.exports = Cliente;