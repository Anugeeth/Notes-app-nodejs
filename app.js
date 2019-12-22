console.log('Starting app....');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo().username;

fs.appendFile('greetings.txt','hello world' + user + '!',
function(err){
    if(err)
    {
        console.log('could not write to file');
    }
}
);