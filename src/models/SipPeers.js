const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SipPeers = sequelize.define('sippeers', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false, 
    },
    ipaddr: {
        type: DataTypes.STRING(15),
        defaultValue: null,
    },
    port: {
        type: DataTypes.BIGINT(5),
        defaultValue: null,
    },
    regseconds: {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    defaultuser: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    fullcontact: {
        type: DataTypes.STRING(35),
        defaultValue: null,
    },
    regserver: {
        type: DataTypes.STRING(20),
        defaultValue: null,
    },
    useragent: {
        type: DataTypes.STRING(20),
        defaultValue: null,
    },
    lastms: {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    host: {
        type: DataTypes.STRING(40),
        defaultValue: "dynamic",
    },
    type: {
        type: DataTypes.ENUM({
            values: ['friend','user','peer']
        }),
        defaultValue: "friend",
    },
    context: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    permit: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    deny: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    secret: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    md5secret: {
      type: DataTypes.STRING(40),
      defaultValue: null,
    },
    remotesecret: {
      type: DataTypes.STRING(40),
      defaultValue: null,
    },
    transport: {
        type: DataTypes.ENUM({
          values: ['udp','tcp','udp,tcp','tcp,udp']
        }),
        defaultValue: "udp",
    },
    dtmfmode: {
        type: DataTypes.ENUM({
          values: ['rfc2833','info','shortinfo','inband','auto']
        }),
        defaultValue: "rfc2833",
    },
    directmedia: {
        type: DataTypes.ENUM({
            values: ['yes','no','nonat','update']
        }),
        defaultValue: null,
    },
    nat: {
        type: DataTypes.ENUM({
            values: ['yes','no','never','route']
        }),
        defaultValue: "no",
    },
    callgroup: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    pickupgroup: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    language: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    disallow: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    allow: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    insecure: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    trustrpid: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    progressinband: {
        type: DataTypes.ENUM({
            values: ['yes','no','never']
        }),
        defaultValue: null,
    },
    promiscredir: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    useclientcode: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    accountcode: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    setvar: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    callerid: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    amaflags: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    callcounter: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    busylevel: {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    allowoverlap: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    allowsubscribe: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    videosupport: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    maxcallbitrate: {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    rfc2833compensate: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    mailbox: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    'session-timers': {
        type: DataTypes.ENUM({
            values: ['accept','refuse','originate']
        }),
        defaultValue: null,
    },
    'session-expires': {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    'session-minse': {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    'session-refresher': {
        type: DataTypes.ENUM({
            values: ['uac','uas']
        }),
        defaultValue: null,
    },
    t38pt_usertpsource: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    regexten: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    fromdomain: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    fromuser: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    qualify: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    defaultip: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    rtptimeout: {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    rtpholdtimeout: {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    sendrpid: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    outboundproxy: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    callbackextension: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    registertrying: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    timert1: {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    timerb: {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    qualifyfreq: {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    constantssrc: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    contactpermit: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    contactdeny: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    usereqphone: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    textsupport: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    faxdetect: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    buggymwi: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    auth: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    fullname: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    trunkname: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    cid_number: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    callingpres: {
        type: DataTypes.ENUM({
            values: ['allowed_not_screened',
              'allowed_passed_screen',
              'allowed_failed_screen',
              'allowed',
              'prohib_not_screened',
              'prohib_passed_screen',
              'prohib_failed_screen',
              'prohib']
        }),
        defaultValue: null,
    },
    mohinterpret: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    mohsuggest: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    parkinglot: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    hasvoicemail: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    subscribemwi: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    vmexten: {
        type: DataTypes.STRING(40),
        defaultValue: null,
    },
    autoframing: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    rtpkeepalive: {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    'call-limit': {
        type: DataTypes.BIGINT(11),
        defaultValue: null,
    },
    g726nonstandard: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    ignoresdpversion: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    allowtransfer: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    },
    dynamic: {
        type: DataTypes.ENUM({
            values: ['yes','no']
        }),
        defaultValue: null,
    }
}, { engine: 'MYISAM', sequelize, modelName: 'sippeers' });

//sequelize.sync();

module.exports = SipPeers;