const { json } = require('body-parser');
const express = require('express');
const Course = require('../Models/course');
const router = express.Router();

router.get('/add-course', (req,res) => {
    const course = new Course({
        code: 'EEN-333',
        title: 'PA course year 3',
        cat: 'DCC',
        credits: 4,
        L: 3,
        T: 1,
        P: 2,
        numberOfStudents: 165,
        teacher: 'PA',
        year: 3
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
            code: 'EEN-205',
            title: 'Control Systems',
            cat: 'DCC',
            credits: 4,
            L: 3,
            T: 1,
            P: 2,
            numberOfStudents: 165,
            teacher: 'GP',
            year: 2
        },
        {
            code: 'EEN-101',
            title: 'Power systems',
            cat: 'DCC',
            credits: 4,
            L: 3,
            T: 1,
            P: 2,
            numberOfStudents: 165,
            teacher: 'BD',
            year: 1
        },
        {
            code: 'EEN-102',
            title: 'Intro to Electrical',
            cat: 'DCC',
            credits: 4,
            L: 3,
            T: 1,
            P: 2,
            numberOfStudents: 165,
            teacher: 'PA',
            year: 1
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

router.get('/get-courses',async(req,res) => {
    let availableCourses = await Course.find({});
    res.send(availableCourses);
});

module.exports = router;