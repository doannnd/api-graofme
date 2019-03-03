const express = require('express');
const chalk = require('chalk');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(chalk.blue('Server is running on port ', port));
});