const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const userRoute = require(__dirname + '/api/routes/user.route');

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGOOSE_URI, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/user', userRoute);

app.listen(port, () => {
    console.log(chalk.blue('Server is running on port ', port));
});