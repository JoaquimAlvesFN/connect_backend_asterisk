const db = require('../models/Cliente');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {
    async login(req, res) {
        const { email, senha } = req.body;
        const response = await db.findAll({
            attributes: ['email', 'senha'],
            where: {
                email: email
            }
        });

        if(!response) 
            res.status(400).send({ error: 'usuario não existe' });

        if(!await bcrypt.compare(senha, response[0].dataValues.senha))
            return res.status(400).send({ error: 'Senha invalida.'});

        
        const token = jwt.sign({ email: response[0].dataValues.email }, authConfig.secret, {
            expiresIn: 86400,
        });

        res.send({ email, token });
    },
    logout(req, res){
        res.status(200).send({token: null});
    },
}