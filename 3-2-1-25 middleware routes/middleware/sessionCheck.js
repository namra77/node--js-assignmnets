const sessionCheck = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login'); // Redirect if user is not logged in
    }
    next(); // Continue if session exists
};

export default sessionCheck;
