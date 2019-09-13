const db = require('../models/Conta');

module.exports = {
    async list(req, res) {
        const response = await db.findAll();

        res.json(response);
    },
    async store(req, res){
        const {
            conta,
            valor,
            seconds
         } = req.body;
        
         var minutos = parseInt(seconds) * 60;
         var credito = minutos / 60 * parseFloat(valor);

        const response = await db.create({
            conta,
            credito,
            minutos
        });

        res.json(response);
    }
}