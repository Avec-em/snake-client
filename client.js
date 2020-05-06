const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '50.64.116.162',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  conn.on('connect', function() {
    console.log("Successfully connected to game server");
  });
  conn.on('data', function(data) {
    console.log(data);
  });
  conn.on('connect', () => {
    conn.write('Name: EMP');
  });

  return conn;
}

module.exports = connect;