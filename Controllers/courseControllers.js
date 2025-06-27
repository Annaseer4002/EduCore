const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const courseModel = require('../models/courseModel');

const HandleCreateCourse = async (req, res) => {
    try {

        const { courseName, courseImage, courseDescription, courseDuration, courseLevel } = req.body;

        if(!courseName || !courseDescription || !courseDuration || !courseLevel) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingCourse = await courseModel.findOne({courseName});
        if(existingCourse) {
            return res.status(400).json({ message: 'Course already exists' });
        }



        const newCourse = new courseModel( {
            courseName,
            courseImage: courseImage || '',
            courseDescription,
            courseDuration,
            courseLevel
        });

        await newCourse.save();
        res.status(201).json({ 
            message: 'Course created successfully',
            course: {
                courseName: newCourse?.courseName,
                courseImage: newCourse?.courseImage,
                courseDescription: newCourse?.courseDescription,
                courseDuration: newCourse?.courseDuration,
                courseLevel: newCourse?.courseLevel,
                id: newCourse?._id

            }
        })






    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const HandleDeleteCourse = async (req, res) => {
    try {
        const { courseId } = req.params;

        if(!courseId) {
            return res.status(400).json({ message: 'Course ID is required' });
        }

        const course = await courseModel.findByIdAndDelete(courseId);

        if(!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json({ message: 'Course deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    HandleCreateCourse
}