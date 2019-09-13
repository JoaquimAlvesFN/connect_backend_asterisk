const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const QueueMember = sequelize.define('queue_member_table', {
    uniqueid: {
        type: DataTypes.INTEGER(11), 
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    membername: {
        type: DataTypes.STRING(40),
    },
    queue_name: {
        type: DataTypes.STRING(128),
    },
    interface: {
        type: DataTypes.STRING(128),
    },
    penalty: {
        type: DataTypes.INTEGER(11),
    },
    paused: {
        type: DataTypes.INTEGER(11),
    },
},{ engine: 'MYISAM', sequelize, modelName: 'queue_member_table' }); 

//sequelize.sync();

module.exports = QueueMember;