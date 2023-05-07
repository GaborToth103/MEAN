mongoose = require('mongoose');
const bcrypt = require('bcrypt')

// Define a schema
Schema = mongoose.Schema;

// Create user schema (top-level document)
const userSchema = new Schema({
    "id": { type: Number, required: true, unique: true },
    "firstname": { type: String, required: true },
    "lastname": { type: String, required: true },
    "email": { type: String, required: true },
    "password": { type: String, required: true },
})


// TODO prehook
userSchema.pre('save', function (next) {
    const user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                console.log('hiba a salt generalasa soran');
                return next(error);
            }
            bcrypt.hash(user.password, salt, function (error, hash) {
                if (error) {
                    console.log('hiba a hasheles soran');
                    return next(error);
                }
                user.password = hash;
                return next();
            })
        })
    } else {
        return next();
    }
});

// TODO compare
userSchema.methods.comparePasswords = function (password, nx) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        nx(err, isMatch);
    });
};

module.exports = { userSchema }