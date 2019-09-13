const db = require('../models/Cliente');
const bcrypt = require('bcrypt');


module.exports = {
    async list(req, res){
        const response = await db.findAll();
        res.json(response);
    },
    async store(req, res){
        const {
            nome,
            email,
            senhaBody,
            conta_id,
            fila_id
        } = req.body;
        await bcrypt.hash(senhaBody, 8, function(err, hash){
            const senha = hash;
            const response = db.create({
                nome,
                email,
                senha,
                conta_id,
                fila_id
            });

            res.json(response);
        });
    },
    async conta(req, res){
        const {conta} = req.params;
        const response = await db.findAll({
            attributes: ['saldo'],
            where: {
                conta: conta
            }
        });
        res.json(response);
    },
}