const net = require('net');

const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
  client.write('Opa, sou o cliente X');
});
