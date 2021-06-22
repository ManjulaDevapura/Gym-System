/**
 * ******************************************************************
 * @file This file defines for Messenger
 * @author Manjula Devapura
 * ******************************************************************
 */

var fs = require('fs');
var Messenger = function(inst_Mob, message) {
console.log("-------------------------------");
console.log("-------------------------------");
console.log("-------------------------------");
console.log(inst_Mob);
console.log(message);
var messages ="**********************************"+"\n"+ message+"\n";

// fs.readFile('messages.txt', (err, data) => { 
//     if (err) throw err; 
//     console.log(data.toString()); 
// }) 

fs.appendFile('./messages.txt', messages, function (err) {
  if (err) throw err;
  console.log('Updated!');
});
}


module.exports = Messenger;