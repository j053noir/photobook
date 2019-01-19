const http = require('http');
// Loads server from the index.js file in the server directory
const app = require('./server');
const config = require('./server/config');
// If server exists, set an alias "config"
// const { server: config } = require('./server/config');

// If server config port is not defined, set it to 3000
// const { port = 3000 } = config.server;
const { port } = config.server;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
