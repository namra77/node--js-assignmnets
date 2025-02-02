import express from 'express'
const router = express.Router();

// Login View Route (GET)
router.get('/login', (req, res) => {
    res.render('login');
});

// Login (POST)
router.post('/login', (req, res) => {
    const { username } = req.body;
    if (username) {
        req.session.user = username; // Store session
        return res.redirect('/profile');
    }
    res.redirect('/login');
});

// Profile View Route (Protected)
router.get('/profile', (req, res) => {
    res.render('profile', { user: req.session.user });
});

// Logout View Route (GET)
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});
export default router;
