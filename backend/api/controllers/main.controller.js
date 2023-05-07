var providers = require('../models/providers.models')
var users = require('../models/users.models')
const Provider = require('../db/db')
const User = require('../db/dbuser')
const { ObjectId } = require('mongodb')

function handleError(res, error) {
    // Handle errors
    res.status(200)
    res.send('Something went wrong.\n' + error)
    console.log(error)
}

function isEmptyList(obj) {
    // Check if list is empty
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0)
}

module.exports.create = function (req, res) {
    // POST /api/providers
    try {
        var provider = req.body
        Provider.create(provider).then(result => {
            res.status(201)
            res.send(result)
        }).catch(error => handleError(res, error))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports.readAll = function (req, res) {
    console.log("asd")
    console.log(req.isAuthenticated())
    // GET ALL /api/providers
    try {
        Provider.find().then(result => {
            if (isEmptyList(result)) {
                res.status(404)
                res.send('List is empty, nothing to read')
            }
            res.status(200)
            res.send(result)
        }).catch(error => {
            handleError(res, error)
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports.readOne = function (req, res) {
    // GET ONE /api/providers/123
    try {
        let id = (req.params.id);
        Provider.find({ 'id': id }).then(result => {
            if (isEmptyList(result)) {
                res.status(404)
                res.send('List is empty')
            }
            // let provider = providers.find(provider => provider.id == id);
            res.status(200)
            res.send(result)
        }).catch(error => {
            handleError(res, error)
        })

    } catch (error) {
        handleError(res, error)
    }
}

module.exports.update = function (req, res) {
    // PUT /api/providers/123
    try {
        let id = (req.params.id);
        let provider = req.body
        Provider.findOneAndUpdate({ 'id': id }, provider, { new: true }).then(result => {
            if (isEmptyList(result)) {
                res.status(404)
                res.send('List is empty, cannot update')
            }
            res.status(200)
            res.send(result)
        }).catch(error => {
            handleError(res, error)
        })
    } catch (error) {
        handleError(res, error)
    }

}

module.exports.deleteOne = function (req, res) {
    // DELETE ONE /api/providers/123
    try {
        let id = (req.params.id);
        Provider.findOneAndDelete({ 'id': id }).then(result => {
            if (isEmptyList(result)) {
                res.status(404)
                res.send('List is empty, cant delete')
            }
            res.status(200)
            res.send(result)
        }).catch(error => {
            handleError(res, error)
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports.deleteAll = function (req, res) {
    // DELETE ALL /api/providers
    try {
        Provider.deleteMany({}).then(result => {
            if (result.deletedCount == 0) {
                res.status(404)
                res.send('List is empty, cant delete')
            }
            res.status(200)
            res.send("All propviders deleted")
        }).catch(error => { handleError(res, error) })
    } catch (error) {
        handleError(res, error)
    }
}


module.exports.createUsers = function (req, res) {
    // POST /api/users
    try {
        var user = req.body
        User.create(user).then(result => {
            res.status(201)
            res.send(result)
        }).catch(error => handleError(res, error))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports.readAllUsers = function (req, res) {
    // GET ALL /api/users
    try {
        User.find().then(result => {
            if (isEmptyList(result)) {
                res.status(404)
                res.send('List is empty, nothing to read')
            }
            res.status(200)
            res.send(result)
        }).catch(error => {
            handleError(res, error)
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports.readOneUsers = function (req, res) {
    // GET ONE /api/users/123
    try {
        let id = (req.params.id);
        User.find({ 'id': id }).then(result => {
            if (isEmptyList(result)) {
                res.status(404)
                res.send('List is empty')
            }
            // let user = users.find(user => user.id == id);
            res.status(200)
            res.send(result)
        }).catch(error => {
            handleError(res, error)
        })

    } catch (error) {
        handleError(res, error)
    }
}

module.exports.updateUsers = function (req, res) {
    // PUT /api/users/123
    try {
        let id = (req.params.id);
        let user = req.body
        User.findOneAndUpdate({ 'id': id }, user, { new: true }).then(result => {
            if (isEmptyList(result)) {
                res.status(404)
                res.send('List is empty, cannot update')
            }
            res.status(200)
            res.send(result)
        }).catch(error => {
            handleError(res, error)
        })
    } catch (error) {
        handleError(res, error)
    }

}

module.exports.deleteOneUsers = function (req, res) {
    // DELETE ONE /api/users/123
    try {
        let id = (req.params.id);
        User.findOneAndDelete({ 'id': id }).then(result => {
            if (isEmptyList(result)) {
                res.status(404)
                res.send('List is empty, cant delete')
            }
            res.status(200)
            res.send(result)
        }).catch(error => {
            handleError(res, error)
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports.deleteAllUsers = function (req, res) {
    // DELETE ALL /api/users
    try {
        User.deleteMany({}).then(result => {
            if (result.deletedCount == 0) {
                res.status(404)
                res.send('List is empty, cant delete')
            }
            res.status(200)
            res.send("All propviders deleted")
        }).catch(error => { handleError(res, error) })
    } catch (error) {
        handleError(res, error)
    }
}

