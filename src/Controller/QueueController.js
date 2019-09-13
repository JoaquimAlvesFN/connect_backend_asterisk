const db = require('../models/Queue');

module.exports = {
    async list(req, res){
        const response = await db.findAll();

        res.send(response);
    },
    async store(req, res){
        const {
            name,
            musiconhold,
            announce,
            strategy,
            servicelevel,
            timeout,
            retry,
            wrapuptime,
            autofill,
            maxlen,
            announce_frequency,
            periodic_announce_frequency,
            announce_holdtime,
            monitor_format,
            campanha_receptiva,
            campanha_ativa,
        } = req.body;
        const response = await db.create({
            name,
            musiconhold,
            announce,
            strategy,
            servicelevel,
            timeout,
            retry,
            wrapuptime,
            autofill,
            maxlen,
            announce_frequency,
            periodic_announce_frequency,
            announce_holdtime,
            monitor_format,
            campanha_receptiva,
            campanha_ativa,
        });
        res.send(response);
    }
}