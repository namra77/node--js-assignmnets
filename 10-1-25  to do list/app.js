
import http from 'http'

let todoList = [];

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/add') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const task = JSON.parse(body).task;
      todoList.push(task);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Task added successfully' }));
    });
  } else if (req.method === 'GET' && req.url === '/list') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todoList));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
