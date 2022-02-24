const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    num: {
        type: Number,
        required:true
    },
    year: {
        type: Number,
        required: true
    },
    proffsAssigned:{
        type:[String]
    },

    coursesAssigned: {
        type: [{
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
        subBatch:{
            type: Number,
            required:true
        },
        tutPrac: {
            type: String,
            required: true
        }
    }]
        
    },
    isEmpty: {
        type: Boolean,
        default: true
    }

});

const tutSlot = mongoose.model('tutSlot', slotSchema);
module.exports = tutSlot;