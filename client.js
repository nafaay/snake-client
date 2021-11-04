const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
    const conn = net.createConnection({
      host: IP,
      port: PORT
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on('data', (data) => {
      console.log(data.toString());
    });
  
    conn.on('connect', () => {
        console.log('Successfully Established!!');
        conn.write('Name: YN');
    })

    conn.on('connect', () => {
        console.log('Snake moving up!');
        conn.write('w');
    })
    conn.on('connect', () => {
        console.log('Snake moving down!');
        conn.write('Move: down');
    })

    conn.on('connect', () => {
        console.log('Snake moving right!');
        conn.write('Move: right');
    })

    conn.on('connect', () => {
        console.log('Snake moving left!');
        conn.write('Move: left');
    })

    conn.on('end', () => {
        console.log('disconnected from server');
     });
    
     return conn;
  };

  module.exports = { connect };
  
  