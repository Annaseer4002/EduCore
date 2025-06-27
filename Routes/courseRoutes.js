const express = require('express')
const { HandleCreateCourse } = require('../Controllers/courseControllers')

const courseRouter = express.Router()

courseRouter.post('/addCourse', HandleCreateCourse)

module.exports = courseRouter
// This code defines a route for creating a new course in an Express application. It imports the

