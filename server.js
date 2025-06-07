const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const contactRoute = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.use('/api/contact', contactRoute);

// Serve Church.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Church.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
