const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slotSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    courseAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },

    profAssigned: {
        type: String,
        default: 'NULL'
    },

    isEmpty: {
        type: Boolean,
        default: true
    }

});

const Slot = mongoose.model('Slot', slotSchema);
module.exports = Slot;