// Import necessary modules
const express = require('express'); // Import the Express framework to create and manage the server.
const app = express(); // Create an instance of an Express application.

// Dummy user data
const users = [
  { id: 1, name: 'Ali', age: 25 },
  { id: 2, name: 'Bushra', age: 12 },
  { id: 3, name: 'Charyl', age: 30 },
  { id: 4, name: 'Ahsan', age: 13 },
  { id: 5, name: 'Imran', age: 14 },
  { id: 6, name: 'Anas', age: 24 },
  { id: 7, name: 'Zain', age: 18 },
];
// This is a static array of user objects. Each object contains an `id`, `name`, and `age` field.
// It is used as dummy data for demonstration purposes.


// Route to fetch all users
app.get('/users', (req, res) => {
  res.json(users); // Sends the entire `users` array as a JSON response.
});
// This route listens for GET requests to the `/users` endpoint.
// When accessed, it responds with the complete list of users in JSON format.


// Route to search for a user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10); // Extracts the `id` parameter from the URL and converts it to an integer.
  const user = users.find(u => u.id === userId); // Searches for a user with the matching `id` in the `users` array.

  if (!user) { // If no user with the given `id` is found:
    return res.status(404).send('User not found'); // Respond with a 404 (Not Found) status and an error message.
  }

  if (user.age < 18) { // Check if the user's age is less than 18.
    return res.status(403).send('Access denied for users under 18'); // Respond with a 403 (Forbidden) status and an error message.
  }

  res.json(user); // If the user exists and meets the age condition, send the user's details as a JSON response.
});
// This route listens for GET requests to the `/users/:id` endpoint.
// The `:id` is a dynamic route parameter that allows searching for specific users by their `id`.
// It includes checks for user existence and age-based access control.


// Start the server
const PORT = process.env.PORT || 8000; // Use the port specified in the `PORT` environment variable or default to 8000.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log a message to confirm the server has started successfully.
});
// This starts the Express server and listens for incoming requests on the specified port.
// The `process.env.PORT` allows flexibility for hosting environments where the port may vary.
// If `process.env.PORT` is undefined, it defaults to port 8000.
