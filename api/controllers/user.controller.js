const mongoose = require('mongoose');
const chalk = require('chalk');

const User = require('../models/user.model');

module.exports.postSignIn = (req, res, next) => {
    User.findOne({phone: req.body.phone}).exec()
    .then((user) => {

    }).catch((err) => {
        console.log(chalk.red(err));
        res.status(500).json({
            error: err
        })
    });
};

module.exports.postSignUp = (req, res, next) => {
    res.send('sign up');
};