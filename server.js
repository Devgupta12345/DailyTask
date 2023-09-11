const express = require('express');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('./middleware');

const app = express();
const PORT = 3000;

app.use(express.json());

// ...

app.post('/login', (req, res) => {
  // In a real-world scenario, you would validate the user's credentials
  // and generate a JWT upon successful authentication.
  const username = req.body.username;
  const user = { username };

  const token = jwt.sign(user, 'your_secret_key');
  res.json({ token });
});

app.get('/protected', authenticateToken, (req, res) => {
  res.send(`Protected Route - Welcome, ${req.user.username}!`);
});

// ...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
