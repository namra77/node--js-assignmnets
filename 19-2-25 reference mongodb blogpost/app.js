import { MongoClient } from "mongodb";

// MongoDB connection URL
const uri ="mongodb+srv://namramahmood7:8zENBJTQu5Jadzo0@cluster0.xyqdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; ;
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('myDB');
    const blogposts = db.collection('blogposts');
    const comments = db.collection('comments');

    // Insert a blog post
    const blogPost = {
      title: 'Introduction to MongoDB',
      content: 'MongoDB is a NoSQL database...',
      author: 'John Doe',
      created_at: new Date(),
      updated_at: new Date(),
      tags: ['mongodb', 'nosql', 'database'],
      likes: 0,
      views: 0,
    };
    const blogResult = await blogposts.insertOne(blogPost);
    console.log('Blog post inserted:', blogResult.insertedId);

    // Insert comments referencing the blog post
    const comment1 = {
      blogpost_id: blogResult.insertedId, // Reference to the blog post
      author: 'Jane Smith',
      content: 'Great article! Very informative.',
      created_at: new Date(),
      likes: 0,
      parent_comment_id: null,
    };
    const comment2 = {
      blogpost_id: blogResult.insertedId, // Reference to the blog post
      author: 'Alice Johnson',
      content: 'I have a question about sharding.',
      created_at: new Date(),
      likes: 0,
      parent_comment_id: null,
    };
    await comments.insertMany([comment1, comment2]);
    console.log('Comments inserted');

    // Query the blog post and its comments
    const blogId = blogResult.insertedId;
    const blog = await blogposts.findOne({ _id: blogId });
    const postComments = await comments.find({ blogpost_id: blogId }).toArray();

    console.log('Blog Post:', blog);
    console.log('Comments:', postComments);
  } finally {
    // Close the connection
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

run().catch(console.dir);