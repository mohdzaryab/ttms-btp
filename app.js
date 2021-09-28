// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const Course = require('./Models/course');

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

// use Routes
//app.use('/api/books', books);
app.get('/add-course', (req,res) => {
    const course = new Course({
        Code: 'EEN-305',
        Title: 'Advanced Control Systems',
        Cat: 'DCC',
        Credits: 4,
        L: 3,
        T: 1,
        P: 2,
        numberOfStudents: 165,
        teacher: 'VP'
    });

    course.save();
});

app.get('/add-courses', (req,res)=> {
    const jsonArray = [
        {
            Code: 'EEN-305',
            Title: 'Advanced Control Systems',
            Cat: 'DCC',
            Credits: 4,
            L: 3,
            T: 1,
            P: 2,
            numberOfStudents: 165,
            teacher: 'VP'
        },
        {
            Code: 'EEN-310',
            Title: 'Power systems',
            Cat: 'DCC',
            Credits: 4,
            L: 3,
            T: 1,
            P: 2,
            numberOfStudents: 165,
            teacher: 'BD'
        }
    ]

    Course.insertMany(jsonArray);
})

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));