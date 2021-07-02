
    const mongoose = require('mongoose');

// Create Schema 
    const courseSchema = new mongoose.Schema({
        name: String, 
        author: String, 
        tags: [String],
        date: {type: Date, default: Date.now},
        isPublished: Boolean, 
        price: Number
    })

// Create Model
    const CourseModel = mongoose.model("courses", courseSchema)

    module.exports = CourseModel;