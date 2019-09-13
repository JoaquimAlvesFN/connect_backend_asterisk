const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CdrReports = sequelize.define('CdrReports', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    calldate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00",
    },
    clid: {
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: " ",
    },
    src: { 
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: " ",
    },
    dst: {
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: " ",
    },
    dcontext: {
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: " ",
    },
    channel: {
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: " ",
    },
    dstchannel: {
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: " ",
    },
    lastapp: {
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: " ",
    },
    lastdata: {
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: " ",
    },
    duration: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        defaultValue: 0,
    },
    billsec: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        defaultValue: 0,
    },
    disposition: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: " ",
    },
    amaflags: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        defaultValue: 0,
    },
    accountcode: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: " ",
    },
    uniqueid: {
        type: DataTypes.STRING(32),
        allowNull: false,
        defaultValue: " ",
    },
    userfield: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: " ",
    },
},{ sequelize, modelName: 'CdrReports' });

//sequelize.sync();

module.exports = CdrReports;
