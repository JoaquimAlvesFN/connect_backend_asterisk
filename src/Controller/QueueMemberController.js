const db = require('../models/QueueMember');

module.exports = {
    async list(req, res){
        const response = await db.findAll();

        res.send(response);
    },
    async store(req, res){
        const {
            membername,
            queue_name,
            interface,
            penalty,
            paused,
        } = req.body;
        const response = await db.create({
            membername,
            queue_name,
            interface,
            penalty,
            paused,
        });

        res.send(response);
    },
    async delete(req, res){
        const response = db.destroy({
            where: {
                uniqueid: req.params.id
            }
        });

        res.send(200);
    }
}