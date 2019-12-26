// (function (exports, require, module, __filename, __dirname){
const EventEmitter = require('events');
var url = 'http://';

class Logger extends EventEmitter {
    log(message){
        console.log(message);
        //Raise an event
        this.emit('messageLogged', { id:1, url: 'http://' });
    }
}
module.exports = Logger;

// });