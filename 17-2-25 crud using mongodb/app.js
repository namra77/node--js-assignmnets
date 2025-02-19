import express from 'express'
import { MongoClient } from 'mongodb';
import http from 'http'

const app = express();
const PORT = 3005;


	// we'll add code here soon

  /**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */


async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =  "mongodb+srv://namramahmood7:bFbjm2ljaQhSP7jI@cluster0.xyqdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


  const client = new MongoClient(uri);

  


  try {
      // Connect to the MongoDB cluster
      await client.connect();

      const database = client.db('myDB'); 
      const collection = database.collection('users');

      const server = http.createServer(async (req, res) => {
        if (req.method === 'POST' && req.url === '/create') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', async () => {
                const data = JSON.parse(body);
                const insertResult = await collection.insertOne(data);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ insertedId: insertResult.insertedId }));
            });
        } else if (req.method === 'POST' && req.url === '/update') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', async () => {
                const { filter, update } = JSON.parse(body);
                const updateResult = await collection.updateOne(filter, { $set: update });
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ modifiedCount: updateResult.modifiedCount }));
            });
        } else if (req.method === 'POST' && req.url === '/delete') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', async () => {
                const filter = JSON.parse(body);
                const deleteResult = await collection.deleteOne(filter);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ deletedCount: deleteResult.deletedCount }));
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    });
  } catch (e) {
    console.error(e);
} finally {
    await client.close();
}
   
}

main().catch(console.error);
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});



