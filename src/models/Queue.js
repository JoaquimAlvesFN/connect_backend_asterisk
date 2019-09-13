const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CampanhaReceptiva = require('./CampanhaReceptiva');
const CampanhaAtiva = require('./CampanhaAtiva');

const Queue = sequelize.define('queue_table', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    name :{
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    musiconhold :{
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    announce :{
        type: DataTypes.STRING(128),
    },
    context :{
        type: DataTypes.STRING(128),
    },
    timeout :{
        type: DataTypes.BIGINT(11),
    },
    monitor_join:{
        type: DataTypes.INTEGER(1),
    },
    monitor_format :{
        type: DataTypes.STRING(128),
    },
    queue_youarenext :{
        type: DataTypes.STRING(128),
    },
    queue_thereare :{
        type: DataTypes.STRING(128),
    },
    queue_callswaiting :{
        type: DataTypes.STRING(128),
    },
    queue_holdtime :{
        type: DataTypes.STRING(128),
    },
    queue_minutes :{
        type: DataTypes.STRING(128),
    },
    queue_seconds :{
        type: DataTypes.STRING(128),
    },
    queue_lessthan :{
        type: DataTypes.STRING(128),
    },
    queue_thankyou :{
        type: DataTypes.STRING(128),
    },
    queue_reporthold :{
        type: DataTypes.STRING(128),
    },
    announce_frequency :{
        type: DataTypes.INTEGER(1),
    },
    announce_round_seconds :{
        type: DataTypes.INTEGER(1),
    },
    announce_holdtime :{
        type: DataTypes.STRING(128),
    },
    retry :{
        type: DataTypes.BIGINT(11),
    },
    wrapuptime :{   
        type: DataTypes.INTEGER(1),
    },
    autofill: {
        type: DataTypes.STRING(11),
    },
    maxlen :{
        type: DataTypes.BIGINT(11),
    },
    servicelevel :{
        type: DataTypes.BIGINT(11),
    },
    strategy :{
        type: DataTypes.STRING(128),
    },
    joinempty :{
        type: DataTypes.STRING(128),
    },
    leavewhenempty :{
        type: DataTypes.STRING(128),
    },
    eventmemberstatus :{
        type: DataTypes.INTEGER(1),
    },
    eventwhencalled :{
        type: DataTypes.INTEGER(1),
    },
    reportholdtime :{
        type: DataTypes.INTEGER(1),
    },
    memberdelay :{
        type: DataTypes.BIGINT(11),
    },
    weight :{
        type: DataTypes.BIGINT(11),
    },
    timeoutrestart :{
        type: DataTypes.INTEGER(1),
    },
    ringinuse :{
        type: DataTypes.INTEGER(1),
    },
    setinterfacevar :{
        type: DataTypes.INTEGER(1),
    },
    campanha_receptiva: {
        type: DataTypes.INTEGER,
        references: {
            model: CampanhaReceptiva,
            key: 'id'
        }
    },
    campanha_ativa: {
        type: DataTypes.INTEGER,
        references: {
            model: CampanhaAtiva,
            key: 'id'
        }
    },
}, { engine: 'MYISAM', sequelize: sequelize, modelName: 'queue_table' });

//sequelize.sync(); 

module.exports = Queue;

