
// We import the http and fs modules.
const http = require('http');
const fs = require('fs');
const path = require('path');

// We create an HTTP server using http.createServer(), which listens for incoming requests.
const server = http.createServer((req, res) => {
    // Inside the request handler, we specify the path to the file we want to read (in this case, abc.txt).
    const filePath = path.join(__dirname, './abc.txt'); 


    // We use fs.readFile() to read the contents of the file. If there's an error 
    // (like the file not being found), we respond with a 404 status code and an error message.
    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Handle error if file not found or can't be read
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found or unable to read the file.');
            return;
        }
// if the file is read successfully, we respond with a 200 status code and the file's content.
        // Serve the file content
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
    });
});

// Finally, we start the server on port 3000 and log a message indicating that the server is running.
// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});