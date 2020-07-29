const { IP, PORT, NAME } = require('./constants');
const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  conn.on(('connect'),()=>{
    conn.write(NAME);
  });
  conn.on('close',(e)=>{
    console.log("you ded cuz you idled");
  })
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {connect};