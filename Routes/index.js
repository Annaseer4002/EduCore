const express = require('express')
const Router = express.Router()
const authRoute = require('./AuthRoutes')
const userRoute = require('./usersRoutes')
const courseRouter = require('./courseRoutes')


const routes = [
    authRoute,
    userRoute,
    courseRouter
  
   

]

module.exports = routes