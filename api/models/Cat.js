const mongoose = require('mongoose');

const CatSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
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
        required: true
    },
    pictures: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cat', CatSchema);