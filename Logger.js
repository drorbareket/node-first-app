const EventEmitter = require('events');
//while extending EventEmitter class, no need for this one:
// var emitter = new EventEmitter();

var url = 'http://mylogger.io/log'
class Logger extends EventEmitter {
    log (message) {
        //send an HTTP request to log
        console.log(message);

        //raise an event
        //no need for emitter.emit but using the this (calling the emit from the parent class)
        this.emit('messagseLogged', {id:1 , url: 'http://path'});
    }
}

module.exports = Logger;