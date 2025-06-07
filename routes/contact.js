const express = require('express');
const router = express.Router();

// POST route for contact form
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log('Contact form submission:', { name, email, message });

  // TODO: Save to database or send email here

  return res.status(200).json({ message: 'Form submitted successfully.' });
});

module.exports = router;
