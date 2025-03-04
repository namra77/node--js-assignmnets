import express from 'express'
import cookieParser from 'cookie-Parser'

const app = express();
const PORT = 3005;

// Middleware to use cookies and parse request bodies
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded

// Serve the login form
app.get("/login", (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    `);
});

// Handle login requests
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Simple authentication check (replace with your own logic)
    if (username === "admin" && password === "password") {
        res.cookie("username", username, { maxAge: 60000, httpOnly: true });
        return res.redirect("/dashboard");
    }
    res.send("Invalid credentials. Please <a href='/login'>try again</a>.");
});

// Dashboard route (protected)
app.get("/dashboard", (req, res) => {
    const username = req.cookies.username;
    if (username) {
        res.send(`Welcome to the dashboard, ${username}!`);
    } else {
        res.status(403).send("Access denied. Please <a href='/login'>log in</a>.");
    }
});

// Clear Cookie
app.get("/clear-cookie", (req, res) => {
    res.clearCookie("username");
    res.send("Cookie has been cleared!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});