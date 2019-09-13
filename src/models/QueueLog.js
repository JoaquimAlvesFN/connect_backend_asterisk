const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const QueueLog = sequelize.define('queuelog', {
    id :{
        type: DataTypes.INTEGER(11), 
        primaryKey: true,
        autoIncrement: true,
    },
    time :{
        type: DataTypes.STRING(26),
        defaultValue: null,
    },
    callid :{
        type: DataTypes.STRING(32),
        allowNull: false,
        defaultValue: " ",
    },
    queuename :{
        type: DataTypes.STRING(32),
        allowNull: false,
        defaultValue: " ",
    },
    agent :{
        type: DataTypes.STRING(32),
        allowNull: false,
        defaultValue: " ",
    },
    event :{
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: " ",
    },
    data1 :{
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: " ",
    },
    data2 :{
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: " ",
    },
    data3 :{
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: " ",
    },
    data4 :{
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: " ",
    },
    data5 :{
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: " ",
    },
},{ engine: 'MYISAM', sequelize, modelName: 'queuelog' });

//sequelize.sync();

module.exports = QueueLog;