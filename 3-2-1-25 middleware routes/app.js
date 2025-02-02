import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import authRoutes from './routes/authRoutes.js'
import authLogin from './A/authLogin.js';
import sessionCheck from './middleware/sessionCheck.js'



const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

// Call Middleware (Only for protected routes)
app.use('/profile', sessionCheck);

// Call Routes
app.use('/', authRoutes);

// View Engine Setup (For rendering EJS templates)
app.set('view engine', 'ejs');

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
