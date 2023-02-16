const EventEmitter = require('events');
// Creating a global object. 
const event = new EventEmitter();



//'on' = 'addEventListerner'
event.on('sayMyName', () => {
    //console.log('My Name is Jarviz');

})
// Creating my on listener.......
event.emit('sayMyName');


// One event emitter and register couple of callbacks.
event.on('sayMyName', () => {
    console.log('My Name is Jarviz');

})
event.on('sayMyName', () => {
    console.log('My Name is Junaid');

})
event.on('sayMyName', () => {
    console.log('My Name is Ali');

})
event.emit('sayMyName');

// Register for the event with callback parameters

event.on('checkPage', (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);

})
event.emit('checkPage', 200, "ok");