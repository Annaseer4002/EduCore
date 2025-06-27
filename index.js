const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const routes = require('./Routes')
const { Authorization } = require('./Middleware/AuthMiddlewares')
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

PORT = process.env.PORT || 5000


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB')

    app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)

})

})

app.use('/', routes)
app.use('/api', routes)

