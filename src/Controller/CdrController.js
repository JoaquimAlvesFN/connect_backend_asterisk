const db = require('../models/CdrReports');
const sequelize = require('sequelize');
const Conta = require('../models/Conta');
const io = require('socket.io-client');
const socket = io('http://localhost:3333');

socket.on('Report', async (evt) => {
    if(evt.billableseconds > 0 && evt.lastapplication == 'Queue' && evt.disposition == 'ANSWERED' && evt.userfield != ''){
        const saldo_minutos = await Conta.findAll({
            attributes: ['minutos'],
            where: {
                conta: evt.userfield
            }
        });

        var saldo = saldo_minutos[0].dataValues.minutos - evt.billableseconds;

        const response = await Conta.update({
            minutos: saldo,
        }, {
            where: {
            conta: evt.userfield
            }
        });

        if(response){
            socket.emit('saldo', saldo);
        }
    }
});

module.exports = {
    async cdr(req, res){
        const response = await db.findAll({
            order: [
                ['calldate', 'DESC']
            ],
        });

        res.json(response);
    },
    async report(req, res){
        const {
            conta
        } = req.body;
        
        //if(conta.length < 0) return res.status(204);

        const response = await db.findAll({
            order: [
                ['calldate', 'DESC']
            ],
            limit: 10,
            where: {
                userfield: conta
            }
        });
        res.json(response);
    },
    async reportMin(req, res){
        const {
            conta,
            status
        } = req.params;
        const response = await db.findAll({
            attributes: ['billsec',[sequelize.fn('sum', sequelize.col('billsec')), 'total_minutos']],
            raw: true,
            where: {
                userfield: conta
            }
        });

        const result = response[0].total_minutos / 60;
        res.json(result);
    },
}