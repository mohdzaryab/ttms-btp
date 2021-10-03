// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const courseRoutes = require('./Routes/courseRoutes');

// routes
//const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// Course routes
app.use('/courses', courseRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));