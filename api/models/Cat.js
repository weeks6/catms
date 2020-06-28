const mongoose = require('mongoose');

const CatSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    pictures: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Cat', CatSchema);