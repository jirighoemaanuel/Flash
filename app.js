const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
const app = Flash();

function Flash() {
  const get = function (url, callback) {
    server.on('request', callback);
  };
  const post = function (url, callback) {
    server.on('request', callback);
  };
  const patch = function (url, callback) {
    server.on('request', callback);
  };
  const remove = function (url, callback) {
    server.on('request', callback);
  };

  // This function handle the port and listen to it
  const listen = function listen(port) {
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  };
  return { listen: listen, get: get, post: post, patch: patch, delete: remove };
}

app.get('/users', (req, res) => {
  res.write('Hello World!');
  res.end();
});

app.post('/', (req, res) => {
  res.write('Hello World!');
  res.end();
});

app.listen(3000);
