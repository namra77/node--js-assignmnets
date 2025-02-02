import express from 'express';
const router = express.Router();

// Login (POST)
router.post('/login', (req, res) => {
    const { username } = req.body;
    if (username) {
        req.session.user = username; // Store session
        return res.redirect('/profile');
    }
    res.redirect('/login');
});

export default router;
