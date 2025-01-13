// // Basic HTTP Server
// import http from 'http';

// // Create server instance
// const server = http.createServer((req, res) => {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.end('Hello World\n');
// });

// server.listen(3000);



import { EventEmitter } from 'events';

// Create custom emitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Add event listener
myEmitter.on('event', (data) => {
 console.log('Event occurred:', data);
});

// One-time listener
myEmitter.once('oneTime', () => {
 console.log('This runs only once');
});

// Emit events
myEmitter.emit('event', 'test data');
myEmitter.emit('oneTime');


import { URL, URLSearchParams } from 'url'; //Imports two classes from Node's URL module for URL parsing and manipulation.


// Create URL object
const url = new URL('https://example.com/path?name=test');

// Access URL parts
// Creates a URL object that parses the URL string into components:

// Protocol: https
// Host: example.com
// Path: /path
// Query: name=test
console.log(url.hostname);     
console.log(url.pathname);    
console.log(url.searchParams); 

// Modify search params
// Accesses different parts of the URL:

// hostname: domain name
// pathname: path after domain
// searchParams: query parameters as URLSearchParams object
url.searchParams.append('id', '123');
url.searchParams.set('name', 'updated');

// Create search params separately
// Modifies query parameters:

// append(): adds new parameter
// set(): updates existing parameter
// URL becomes: https://example.com/path?name=updated&id=123

const params = new URLSearchParams();
params.set('key', 'value');
console.log(params.toString()); // key=value

// Creates standalone URLSearchParams object for query string manipulation without full URL.