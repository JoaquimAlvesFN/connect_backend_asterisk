const db = require('../models/Script');

module.exports = {
    async list(req, res){
        const response = await db.findAll();
        res.send(response);
    },
    async store(req, res){
        const {
            nome,
            conteudo,
        } = req.body;

        const response = await db.create({
            nome,
            conteudo,
        });

        res.send(response);
    },
}