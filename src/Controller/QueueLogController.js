const db = require('../models/QueueLog');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    async list(req, res){
        const response = await db.findAll();

        res.send(response);
    },
    async search(req, res){
        const {
            fila,
            data,
        } = req.headers;
        const response = await db.findAll({
            where: {
                queuename: fila,
                time: data
            }
        });
        res.send(response);
    },
    async store(req, res){
        const {
            id,
            time,
            callid,
            queuename,
            agent,
            event,
            data1,
            data2,
            data3,
            data4,
            data5,
        } = req.body;
        const response = await db.create({
            id,
            time,
            callid,
            queuename,
            agent,
            event,
            data1,
            data2,
            data3,
            data4,
            data5,
        });

        res.send(response);
    },
}