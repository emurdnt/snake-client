const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  conn.on(('connect'),()=>{
    // console.log("you're in.")
    conn.write("Name: ECU");
  });
  conn.on('close',(e)=>{
    console.log("you ded cuz you idled");
  })
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {connect};