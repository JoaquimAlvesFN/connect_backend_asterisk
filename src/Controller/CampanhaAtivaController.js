const db = require('../models/CampanhaAtiva');

module.exports = {
    async list(req, res){
        const response = await db.findAll();
        res.send(response);
    },
    async store(req, res){
        const {
            nome,
            data_inicial,
            data_final,
            scriptId,
        } = req.body;

        const response = await db.create({
            nome,
            data_inicial,
            data_final,
            scriptId,
        });
        res.send(response);
    }
}