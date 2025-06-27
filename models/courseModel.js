const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: { type: String, required: true},
    courseImage: { type: String, default:''},
    courseDescription: {type: String, required: true},
    courseDuration: {type: String, required: true},
    courseLevel: {type: String, required: true}
})

module.exports = mongoose.model('Course', courseSchema);