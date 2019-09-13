require('dotenv/config');

const {IP, AMI_PORT, AMI_USER, AMI_PASS} = process.env;
const ami = require('asterisk-manager')(AMI_PORT, IP, AMI_USER, AMI_PASS, true);

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