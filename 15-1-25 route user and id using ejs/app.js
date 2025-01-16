// Importing required modules
import express from 'express'
const app = express();
app.use(express.static('public'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');


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


// Route to fetch all users
app.get('/users', (req, res) => {
  res.render('users', { users });
});

// Route to search user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).send('User not found');
  }

  if (user.age < 18) {
    return res.status(403).send('Access denied. User is under 18.');
  }

  res.render('user', { user });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});