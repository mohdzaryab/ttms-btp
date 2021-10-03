const { json } = require('body-parser');
const express = require('express');
const Course = require('../Models/course');
const router = express.Router();

router.get('/add-course', (req,res) => {
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

    course.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.get('/add-courses', (req,res)=> {
    const jsonArray = [
        {
            code: 'EEN-305',
            title: 'Advanced Control Systems',
            cat: 'DCC',
            credits: 4,
            L: 3,
            T: 1,
            P: 2,
            numberOfStudents: 165,
            teacher: 'VP',
            year: 3
        },
        {
            code: 'EEN-310',
            title: 'Power systems',
            cat: 'DCC',
            credits: 4,
            L: 3,
            T: 1,
            P: 2,
            numberOfStudents: 165,
            teacher: 'BD',
            year: 2
        }
    ]

    Course.insertMany(jsonArray)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.get('/del-courses', (req,res) => {
    Course.deleteMany({})
    .then(res => console.log(res))
    .catch(err => console.log(err));
});

module.exports = router;