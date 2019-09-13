const ami = require('asterisk-manager')('5038','192.168.0.150','adminJ','@@hh1983', true);

module.exports = {
    async login(req, res){
        const {
            ramal
        } = req.body;
        await ami.action({
            'action':'originate',
            'channel':`SIP/${ramal}`,
            'context':'public',
            'exten': '0101',
            'callerid':'Login Agente',
            'priority':1,
            'variable': {
                'ramal': `${ramal}`
            }
        }, function(err, res) {
            if(res === 'Error' || 'Success') {
                console.log(res);
                return;
            }
        });
    },
    async logout(req, res){
        const {
            ramal
        } = req.body;
        await ami.action({
            'action': 'agentlogoff',
            'agent': `${ramal}`,
            'soft': true,
        }, function(err, res) {
            if(res === 'Error' || 'Success') {
                console.log(res);
                return;
            }
        });
    }
}