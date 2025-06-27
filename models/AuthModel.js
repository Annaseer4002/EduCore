const mongoose = require ('mongoose')


const authSchema = new mongoose.Schema({
   email: {type: String, required: true},
   password: {type: String, required: true},
   userName: {type: String, required: true},
   role: {type: String, default: 'user'} // 'student' or 'instructor'
}, { timestamps: true})


module.exports = mongoose.model('Auth', authSchema)