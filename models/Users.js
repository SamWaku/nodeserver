const mongoose = require('mongoose'); //import mongoose
const bcrypt = require('bcryptjs');   //import bcryptjs
const jwt = require('jasonwebtoken'); //import jwt
const Schema = mongoose.Schema;       //schema

const { JWT_SECRET } = process.env;

const { REFRESH_TOKEN_SECRET } = process.env;

//defing the userschema
const UserSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    token: {
        type: String
    },
    refreshToken: {
        type: String
    },

});

//middleware function defining the token expiry time 2m
UserSchema.methods.generateAuthToken = function () {
    const User = this;
    const secret = JWT_SECRET;
    const token = jwt.sign({ _ud: User,_id }, secret, {
        expiresIn: '2m',
    },);
  User.token = token;
}

//middleware function to refresh a token 5m
UserSchema.methods.generateRefreshToken = function () {
    const User = this;
    const secret = REFRESH_TOKEN_SECRET;
    const refreshToken = jwt.sign({ _id: User._id }, secret, {
        expiresIn: '5m',
    },);
    User.refreshToken = refreshToken;
}

UserSchema.pre('save', async function (next) {
    const User = this;
    if (User.isModified('password')) {
        User.password = await bcrypt.hash(User.password, 12);
    }
    next();
});

const User = mongoose.model('user', UserSchema);

module.exports = User;