const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    credits: {
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
    },
    year: {
        type: Number,
        required: true
    },
    slotAssigned: {
        type: String,
        default: 'NULL'
    }

});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;