const net = require("net");
const connect = function () {
    const conn = net.createConnection({
      host: '165.227.47.243',
      port: '50541'
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on('data', (data) => {
      console.log(data.toString());
      conn.end();
    });
  
    conn.on('end', () => {
      console.log('disconnected from server');
    });
  
    return conn;
  };

  module.exports = { connect };
  
  