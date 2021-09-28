const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    Code: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Cat: {
        type: String,
        required: true
    },
    Credits: {
        type: Number,
        required: true
    },
    L: {
        type: Number,
        required: true
    },
    T: {
        type: Number,
        required: true
    },
    P: {
        type: Number,
        required: true
    },
    numberOfStudents: {
        type: Number,
        required: true
    },
    teacher: {
        type: String,
        required: true
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;