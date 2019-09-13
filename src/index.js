require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const AuthController = require('./Controller/AuthController');

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
  req.io = io;

  next();
});

const {IP, AMI_PORT, AMI_USER, AMI_PASS} = process.env;
const ami = require('asterisk-manager')(AMI_PORT, IP, AMI_USER, AMI_PASS, true);
ami.on('managerevent', evt => {
  switch(evt.event){
    case 'QueueCallerJoin':
      io.emit('QueueCallerJoin', evt);
      break;
    case 'Cdr':
      io.emit('Report', evt);
      break;
    case 'AgentLogin':
      break;
    case 'AgentConnect':
        io.emit('Agent', (evt) => {
          console.log(evt);
        });
      break;
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(require('./routes'));

server.listen(3333, function () {
  console.log('App Running');
});