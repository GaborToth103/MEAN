mongoose = require('mongoose')
const {Provider} = require('../models/provider')

// Connection URI to MongoDBNamespace
uri = 'mongodb://127.0.0.1:27017/provider_db'

// Make db connection (asynchronously)
mongoose.connect(uri).then(result=>{
    console.log('Successful Connection!!')
}).catch(error=>{
    console.log(error)
})


/*
//Manual creating Document in MongoDB
Provider.create({
    "firstname": "Marylinda",
    "lastname": "Bevir",
    "position": "Chief Executive Office",
    "company": {
        "company_name": "Jabbersphere",
        "address": "1081 Arapahoe Court",
        "address2": "",
        "city": "Houston",
        "state": "TX",
        "postal_code": "77234",
        "phone": "713-849-1712",
        "email": "mbevir@jabbersphere.com",
        "description": "Versatile Asynchronous Collaboration",
        "tagline": "Visualize Cross-Platform Action-Items"}
})
*/

module.exports = Provider