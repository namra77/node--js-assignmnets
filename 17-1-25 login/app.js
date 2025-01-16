// Import required modules
import express from 'express' // Express is a web framework for Node.js to create web applications// Middleware to parse incoming form data in the request body.
import bodyParser from 'body-parser'
const app = express(); // Initialize the Express application.
const PORT = 3000; // Define the port number on which the server will listen.

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data from forms.
app.set("view engine", "ejs"); // Set EJS as the templating engine for rendering dynamic HTML views.
app.use(express.static("public")); // Serve static files (like CSS) from the 'public' directory.

// Define valid credentials for login (hardcoded for simplicity)
const validUsername = "user"; // Example username.
const validPassword = "password"; // Example password.

// Route to render the login page
app.get("/", (req, res) => {
  // Render the 'login.ejs' file and pass null for the 'error' parameter initially.
  res.render("login", { error: null });
});

// Route to handle form submission for login
app.post("/login", (req, res) => {
  const { username, password } = req.body; // Extract username and password from the submitted form.

  // Check if the submitted credentials match the valid credentials.
  if (username === validUsername && password === validPassword) {
    // If the credentials are valid, render the 'welcome.ejs' view and pass the username.
    res.render("welcome", { username });
  } else {
    // If the credentials are invalid, re-render the 'login.ejs' view with an error message.
    res.render("login", { error: "Invalid username or password!" });
  }
});

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Log the URL for convenience.
});
