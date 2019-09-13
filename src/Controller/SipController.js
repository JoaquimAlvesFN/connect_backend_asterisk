const db = require('../models/SipPeers');

module.exports = {
    async list(req, res){
        const response = await db.findAll();
        res.send(response);
    },
    async find(req, res){
        const {name} = req.body;
        const response = await db.findOne({ 
            where: {name: name} 
        });

        res.send(response);
    },
    async store(req, res){
        const {
            name,
            defaultuser,
            secret,
            fromuser,
            disallow,
            allow
        } = req.body;
        const response = await db.create({
            name,
            defaultuser,
            secret,
            fromuser,
            disallow,
            allow
        });

        res.send(response);
    },
    /**async update(req, res){
        const response = await db.update({

        },{
            where: {
                id: {
                    [Op.and]: {id: req.params.id}
                }
            }
        });

        res.send(response);
    },*/
    async delete(req, res){
        const {name} = req.body;
        const response = db.destroy({
            where: {
                name: name
            }
        });

        res.send(response);
    }
}