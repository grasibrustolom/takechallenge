const express = require('express');
const app = express();
const routeRepositories = require('./routes/repositories');



app.use('/repositories', routeRepositories);


module.exports = app;