const express = require('express')
const { HandleCreateCourse, HandleDeleteCourse, HandleUpdateCourse, HandleEditCourse } = require('../Controllers/courseControllers')
const { Authorization, AdminAuthorization } = require('../Middleware/AuthMiddlewares')

const courseRouter = express.Router()

courseRouter.post('/addCourse', AdminAuthorization, HandleCreateCourse)
courseRouter.delete('/deleteCourse/:courseId', AdminAuthorization, HandleDeleteCourse)

courseRouter.put('/updateCourse/:courseId', AdminAuthorization, HandleUpdateCourse)
courseRouter.patch('/editCourse/:courseId', AdminAuthorization, HandleEditCourse)

module.exports = courseRouter
// This code defines a route for creating a new course in an Express application. It imports the

