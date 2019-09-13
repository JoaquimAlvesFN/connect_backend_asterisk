const db = require('../models/Ddr');

module.exports = {
    async index(req, res) {
        const response = await db.findAll();

        res.json(response);
    },
    async store(req, res) {
        const { ddr, fila } = req.body;
        const response = await db.create({ ddr, fila });

        res.json(response);
    },
    async destroy(req, res) {
        const { id } = req.params;
        const response = await db.destroy({
            where: {
                id
            }
        })
    }
}