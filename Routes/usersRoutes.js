const express = require('express')
const { HandleGetAllUsers } = require('../Controllers/userControllers')

const router = express.Router()



router.get('/allUsers', HandleGetAllUsers)

module.exports = router