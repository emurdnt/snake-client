

/**
 * Establishes connection with the game server
 */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: 'localhost',
//     port: 50541
//   });

//   conn.on('close',(e)=>{
//     console.log("you ded cuz you idled");
//   })
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 

//   return conn;
// }
const { connect } = require('./client');
console.log('Connecting ...');
connect();


// host: '135.23.222.131',
// port:  50541