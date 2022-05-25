const path = require('path');
const Logger = require('./Logger');
var logger = new Logger();


var pathObj = path.parse(__filename);
console.log(pathObj);

logger.on('messagseLogged', (arg) => {
    console.log(arg);
    sayHello('dror');
})

function sayHello(name){
    console.log(`Hello ${name}`);
}

logger.log('Dror logged.');



