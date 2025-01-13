

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
let submittedData = {}; // To store submitted data in memory

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.method === 'GET' && parsedUrl.pathname === '/') {
        // Serve the HTML form
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Error loading the form');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.method === 'GET' && Object.keys(parsedUrl.query).length > 0) {
        // Handle form submission
        submittedData = parsedUrl.query;

        // Save submitted data to a JSON file
        const filePath = path.join(__dirname, 'data.json');
        fs.writeFileSync(filePath, JSON.stringify(submittedData, null, 2));

        // Respond with a success message
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Form submitted successfully. Refresh the page to see the data.');
    } else if (req.method === 'GET' && parsedUrl.pathname === '/data') {
        // Serve the JSON data
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(submittedData));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
