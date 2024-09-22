const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhlRoutes');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'https://unrivaled-bubblegum-f9e63c.netlify.app/', // Your frontend domain
  methods: 'GET,POST', // Allowed methods
  allowedHeaders: 'Content-Type,Authorization' // Allowed headers
}));
app.use(bodyParser.json({ limit: '50mb' })); // To handle large file uploads

app.use('/bfhl', bfhlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
