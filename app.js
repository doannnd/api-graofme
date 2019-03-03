const express = require('express');
const chalk = require('chalk');

require('dotenv').config();

const userRoute = require(__dirname + '/api/routes/user.route');

const app = express();
const port = process.env.PORT;

app.use('/user', userRoute);

app.listen(port, () => {
    console.log(chalk.blue('Server is running on port ', port));
});