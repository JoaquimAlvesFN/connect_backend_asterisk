const express = require('express');
const routes = new express.Router();
const authMiddleware = require('./middlewares/auth');

const CdrController = require('./Controller/CdrController');
const SipController = require('./Controller/SipController');
const QueueController = require('./Controller/QueueController');
const QueueLogController = require('./Controller/QueueLogController');
const QueueMemberController = require('./Controller/QueueMemberController');
const AgentLoginController = require('./Controller/AgentLoginController');
const ScriptController = require('./Controller/ScriptController');
const CampanhaAtivaController = require('./Controller/CampanhaAtivaController');
const CampanhaReceptivaController = require('./Controller/CampanhaReceptivaController');
const ClienteController = require('./Controller/ClienteController');
const ContaController = require('./Controller/ContaController');
const DdrController = require('./Controller/DdrController');

//routes.use(authMiddleware);

routes.get('/ddr', DdrController.index);
routes.post('/ddr', DdrController.store);
routes.delete('/ddr/:id', DdrController.destroy);

routes.get('/cdr', CdrController.cdr);
routes.get('/report', CdrController.report);
routes.get('/report/:conta/minutes', CdrController.reportMin);

routes.get('/sip', SipController.list);
//routes.get('/sip/find', SipController.find);
routes.post('/sip', SipController.store);
routes.delete('/sip', SipController.delete);

routes.get('/queue', QueueController.list);
routes.post('/queue', QueueController.store);

routes.get('/queuelog', QueueLogController.list);
routes.get('/queuelog/fila', QueueLogController.search);

routes.get('/queuemember', QueueMemberController.list);
routes.post('/queuemember', QueueMemberController.store);
routes.delete('/queuemember/:id', QueueMemberController.delete);

routes.post('/agentlogin', AgentLoginController.login);
routes.post('/agentlogout', AgentLoginController.logout);

routes.get('/script', ScriptController.list);
routes.post('/script', ScriptController.store);

routes.get('/campanha_ativa', CampanhaAtivaController.list);
routes.post('/campanha_ativa', CampanhaAtivaController.store);

routes.get('/campanha_receptiva', CampanhaReceptivaController.list);
routes.post('/campanha_receptiva', CampanhaReceptivaController.store);

routes.get('/cliente', ClienteController.list);
routes.get('/cliente/:conta', ClienteController.conta);
routes.post('/cliente', ClienteController.store);
//routes.put('/cliente', ClienteController.update);

routes.get('/conta', ContaController.list);
routes.post('/conta', ContaController.store);

module.exports = routes;