var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller');
const passport = require('passport');

//HTTP Verbs: POST, GET, PUT, DELETE
router.post('/providers', mainController.create)

//Get /api/providers
router.get('/providers', mainController.readAll)

//Get One /api/providers/123

router.get('/providers/:id', mainController.readOne)

// Put /api/providers123
router.put('/providers/:id', mainController.update)

// Delete one provider /api/providers/123
router.delete('/providers/:id', mainController.deleteOne)

// Delete all providers
router.delete('/providers', mainController.deleteAll)




//HTTP Verbs: POST, GET, PUT, DELETE
router.post('/users', mainController.createUsers)

//Get /api/users
router.get('/users', mainController.readAllUsers)

//Get One /api/users/123

router.get('/users/:id', mainController.readOneUsers)

// Put /api/users/123
router.put('/users/:id', mainController.updateUsers)

// Delete one users /api/users/123
router.delete('/users/:id', mainController.deleteOneUsers)

// Delete all providers
router.delete('/users', mainController.deleteAllUsers)


// #3 Login
router.route('/users/login/').post((req, res, next) => {
    if (req.body.email, req.body.password) {
        passport.authenticate('local', function (error, user) {
            if (error) return res.status(500).send(error);
            req.logIn(req.body, function (error) { 
                if (error) return res.status(500).send(error);// TODO fail
                console.log("bejelentkezes sikeres")
                return res.status(200).send('Bejelentkezes sikeres');
            })
        })(req, res);
    } else {
        return res.status(400).send('Hibas keres, email es password kell');
    }
});

router.route('/users/logout/').post((req, res, next) => {
    if (req.isAuthenticated()) {
        req.logout((err) => {
            if (err) {
                console.log('Hiba a kijelentkezés során');
                return res.status(500).send(err)
            }
            return res.status(200).send('Kijelentkezes sikeres');
        });
    } else {
        return res.status(403).send('Nem is volt bejelentkezve');
    }
})

router.route('/status').get((req, res, next) => {
    console.log("status")
    console.log("wtf")
    if (req.isAuthenticated()) {
        console.log(req.user)
        return res.status(200).send(req.user);
    } else {
        return res.status(403).send('Nem is volt bejelentkezve');
    }
})

// No matching api endpoints
router.post('/*', notFound)
router.get('/*', notFound)
router.put('/*', notFound)
router.delete('/*', notFound)


function notFound(req, res) {
    res.status(400)
    res.send('Not vaid endpoint.')
}

module.exports = router