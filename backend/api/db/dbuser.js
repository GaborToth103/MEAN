mongoose = require('mongoose')
const {User} = require('../models/user')

// Connection URI to MongoDBNamespace
uri = 'mongodb://127.0.0.1:27017/provider_db'

// Make db connection (asynchronously)
mongoose.connect(uri).then(result=>{
    console.log('Successful Connection!!')
}).catch(error=>{
    console.log(error)
})

/*
// manually creating users
User.create({
    "id": 123121231233232,
    "firstname": "Ma123rylinda",
    "lastname": "Be123vir",
    "email": "as123d",
    "password": "a123sd"
})
*/

module.exports = User