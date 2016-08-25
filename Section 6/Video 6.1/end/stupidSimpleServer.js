'use strict';
let http = require('http');

let movies = [
  {
    name: 'Star Wars',
    // year: 1977,
    description: 'A farm boy becomes a terrorist who blows up a military installation killing tens of thousands.'
  },
  {
    name: 'The Matrix',
    // year: 1999,
    description: 'What if virtual reality didn\'t look like Second Life?'
  }
];
let port = 2352;

http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  // Without this we aren't going to be able to call from a server running on port 3000
  // to one running on this port. They're considered to be different servers and thus
  // your browser will try to protect you from harmful code.
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.end(JSON.stringify(movies));
}).listen(2352);

console.log(`Server listening on port ${port}`);
