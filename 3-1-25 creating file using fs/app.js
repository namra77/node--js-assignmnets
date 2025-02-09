import http from 'http'
import fs from 'fs'

// Create a file and write some data to it
const filePath = 'source.txt';
const data = 'This is some sample data to be written to the file.';

// Write data to the file
fs.writeFileSync(filePath, data);

// Function to read a specific amount of data from the file
function readData(start, end) {
  const buffer = Buffer.alloc(end - start);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buffer, 0, buffer.length, start);
  fs.closeSync(fd);
  return buffer.toString();
}

// Create an HTTP server to serve static HTML
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the File Server</h1>');
  } else if (req.url === '/read') {
    // Read specific data from the file (e.g., from index 0 to 10)
    const data = readData(0, 10);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Read data: ${data}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});