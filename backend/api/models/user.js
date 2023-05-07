mongoose = require('mongoose')
const {userSchema} = require('../schemas/user.schemas')

// Create user model
User = mongoose.model('User', userSchema)

module.exports = {User}